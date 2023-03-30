import { storageService } from './async-storage.service.js'

const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'


export const userService = {
    getLoggedInUser,
    login,
    logout,
    signup,
    get,
    _saveLocalUser,
    getUserLikedStays,
    getUserStays,
    getUserOrder
}


function getLoggedInUser() {
    const str = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    return JSON.parse(str)
}


function login(credentials) {
    return storageService.query(USER_KEY)
        .then(users => {
            const user = users.find(u => u.username === credentials.username)
            if (user) {
                sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
                return user
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
            return storageService.post(USER_KEY, credentials)
                .then(user => {
                    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
                    return user
                })
        })
}

function get(userId) {
    return storageService.get(USER_KEY, userId)
}

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
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
  
  async function getUserOrder(entityId) {
    let userOrders = [];
    const orders = await storageService.query(ORDER_KEY);
    try {
      userOrders = orders.filter((order) => order.hostId === entityId);
      return userOrders;
    } catch {
      console.error('cannot get user order');
    }
  }


