import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js'

const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'


export const userService = {
    getLoggedinUser,
    login,
    logout,
    signup,
    get,
    _saveUserToStorage,
    getUserLikedStays,
    getUserStays,
    getUserReservation,
    updateBalance,
    changeReservationStatus,
}


function getLoggedinUser() {
  var user = JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null)
  if (!user) {
      user = { _id: 'u101', fullname: 'Baba Ji', balance: 1000, reservations: [] }
      _saveUserToStorage(user)
  }
  return user
}


function login(credentials) {
  return storageService.query(USER_KEY)
      .then(users => {
          const user = users.find(u => u.username === credentials.username)
          if (user) {
              return _saveUserToStorage(user)
          } else {
              return Promise.reject('Invalid credentials')
          }
      })
}

function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return Promise.resolve()
}

function signup(credentials) {
  return storageService.query(USER_KEY)
      .then(users => {
          const user = users.find(u => u.username === credentials.username)
          if (user) return Promise.reject('Username already taken')
          return storageService.post(USER_KEY, {...credentials, balance: 10000, reservations: []})
              .then(user => {
                  return _saveUserToStorage(user)
              })
      })
}

function get(userId) {
    return storageService.get(USER_KEY, userId)
}

function _saveUserToStorage(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

async function getUserStays(entityId) {
    let userStays = [];
    const stays = await storageService.query(STAY_KEY);
    try {
      userStays = stays.filter((stay) => stay.host.id === entityId);
      console.log('userStays');
      return userStays;
    } catch {
      console.log('baiaaa');
    }
  }
  
  async function getUserLikedStays(likedStays) {
    return await Promise.all(
      likedStays.map((likedStay) => {
        return storageService.get(STAY_KEY, likedStay);
      })
    );
  }
  
  async function getUserReservation(entityId) {
    let userReservations = [];
    const reservations = await storageService.query(ORDER_KEY);
    try {
      userReservations = reservations.filter((reservation) => reservation.hostId === entityId);
      return userReservations;
    } catch {
      console.error('cannot get user reservation');
    }
  }

  function changeReservationStatus(reservationId, status) {
    const user = getLoggedinUser()
    const reservation = user.reservations.find(reservation => reservation._id === reservationId)
    reservation.status = status
    
    return storageService.put(USER_KEY, user).then(savedUser => {
        _saveUserToStorage(savedUser)
        return reservation
    })
}

function updateBalance(amount) {
  const user = getLoggedinUser()
  user.balance += amount
  return storageService.put(USER_KEY, user).then(savedUser => {
      _saveUserToStorage(savedUser)
      return savedUser.balance
  })
}

function _saveUserToStorage(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

function addReservation(cart, total) {
  const user = getLoggedinUser()

  const reservation = {
      _id: utilService.makeId(),
      createdAt: Date.now(),
      items: cart,
      total,
      status: 'PENDING',
  }   
  user.balance -= total 
  user.reservations.unshift(reservation)

  return storageService.put(USER_KEY, user).then(savedUser => {
      _saveUserToStorage(savedUser)
      return savedUser
  })
}
