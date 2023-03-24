
import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'stay'


export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    addStayMsg
}
window.cs = stayService

function _createStays() {
    let stays = utilService.loadFromStorage(STORAGE_KEY)
    if (!stays || !stays.length) {
      stays = demoStays
      utilService.saveToStorage(STORAGE_KEY, stays)
    }
  }

async function query(filterBy = { txt: '', price: 0 }) {
    var stays = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.description))
    }
    if (filterBy.price) {
        stays = stays.filter(stay => stay.price <= filterBy.price)
    }
    return stays
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
    await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await storageService.put(STORAGE_KEY, stay)
    } else {
        // Later, owner is set by the backend
        stay.owner = userService.getLoggedinUser()
        savedStay = await storageService.post(STORAGE_KEY, stay)
    }
    return savedStay
}

async function addStayMsg(stayId, txt) {
    // Later, this is all done by the backend
    const stay = await getById(stayId)
    if (!stay.msgs) stay.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    stay.msgs.push(msg)
    await storageService.put(STORAGE_KEY, stay)

    return msg
}

function getEmptyStay() {
    return {
        name: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}

const demoStays =[ {
    "_id": "10006546",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
    "price": 34.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 8,
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    "labels": [
      "Play",
      "Tropical"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    "loc": {
      "country": "Portugal",
      "countryCode": "PT",
      "city": "Porto",
      "address": "17 Kombo st",
      "lat": -8.61308,
      "lng": 41.1413
    },
    "reviews": [
      {
        "id": "madeId",
        "txt": "Very helpful hosts",
        "rate": 5,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
  },
  {
    "_id": "1000777",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
    "price": 80.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 8,
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    "labels": [
      "Top of the world",
      "Trending",
      "Play",
      "Tropical"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    "loc": {
      "country": "Poland",
      "countryCode": "PT",
      "city": "Worsow",
      "address": "17 Kombo st",
      "lat": -8.61308,
      "lng": 41.1413
    },
    "reviews": [
      {
        "id": "madeId",
        "txt": "Very helpful hosts. Cooked traditional...",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
  },
  {
    "_id": "1000888",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
    "price": 80.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 8,
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    "labels": [
      "Top of the world",
      "Trending",
      "Play",
      "Tropical"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    "loc": {
      "country": "Usa",
      "countryCode": "PT",
      "city": "Boston",
      "address": "17 Kombo st",
      "lat": -8.61308,
      "lng": 41.1413
    },
    "reviews": [
      {
        "id": "madeId",
        "txt": "Very helpful hosts. Cooked traditional...",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
{
    "_id": "1000988",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
    "price": 99.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 8,
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    "labels": [
      "Top of the world",
      "Trending",
      "Play",
      "Tropical"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    "loc": {
      "country": "Spain",
      "countryCode": "PT",
      "city": "Madrid",
      "address": "17 Kombo st",
      "lat": -8.61308,
      "lng": 41.1413
    },
    "reviews": [
      {
        "id": "madeId",
        "txt": "Very helpful hosts. Cooked traditional...",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
{
  "_id": "1000123",
  "name": "Ribeira Charming Duplex",
  "type": "House",
  "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
  "price": 67.00,
  "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
  "capacity": 8,
  "amenities": [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  "labels": [
    "Top of the world",
    "Trending",
    "Play",
    "Tropical"
  ],
  "host": {
    "_id": "u101",
    "fullname": "Davit Pok",
    "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  "loc": {
    "country": "Israel",
    "countryCode": "PT",
    "city": "Tel Aviv",
    "address": "17 Kombo st",
    "lat": -8.61308,
    "lng": 41.1413
  },
  "reviews": [
    {
      "id": "madeId",
      "txt": "Very helpful hosts. Cooked traditional...",
      "rate": 4,
      "by": {
        "_id": "u102",
        "fullname": "user2",
        "imgUrl": "/img/img2.jpg"
      }
    }
  ],
  "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
{
  "_id": "1000927",
  "name": "Ribeira Charming Duplex",
  "type": "House",
  "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
  "price": 333.00,
  "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
  "capacity": 8,
  "amenities": [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  "labels": [
    "Top of the world",
    "Trending",
    "Play",
    "Tropical"
  ],
  "host": {
    "_id": "u101",
    "fullname": "Davit Pok",
    "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  "loc": {
    "country": "Italy",
    "countryCode": "PT",
    "city": "Rome",
    "address": "17 Kombo st",
    "lat": -8.61308,
    "lng": 41.1413
  },
  "reviews": [
    {
      "id": "madeId",
      "txt": "Very helpful hosts. Cooked traditional...",
      "rate": 4,
      "by": {
        "_id": "u102",
        "fullname": "user2",
        "imgUrl": "/img/img2.jpg"
      }
    }
  ],
  "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
{
  "_id": "1000991",
  "name": "Ribeira Charming Duplex",
  "type": "House",
  "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
  "price": 213.00,
  "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
  "capacity": 8,
  "amenities": [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  "labels": [
    "Top of the world",
    "Trending",
    "Play",
    "Tropical"
  ],
  "host": {
    "_id": "u101",
    "fullname": "Davit Pok",
    "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  "loc": {
    "country": "Denemark",
    "countryCode": "PT",
    "city": "Kopenhagen",
    "address": "17 Kombo st",
    "lat": -8.61308,
    "lng": 41.1413
  },
  "reviews": [
    {
      "id": "madeId",
      "txt": "Very helpful hosts. Cooked traditional...",
      "rate": 4,
      "by": {
        "_id": "u102",
        "fullname": "user2",
        "imgUrl": "/img/img2.jpg"
      }
    }
  ],
  "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
{
  "_id": "1000933",
  "name": "Ribeira Charming Duplex",
  "type": "House",
  "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
  "price": 132.00,
  "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
  "capacity": 8,
  "amenities": [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  "labels": [
    "Top of the world",
    "Trending",
    "Play",
    "Tropical"
  ],
  "host": {
    "_id": "u101",
    "fullname": "Davit Pok",
    "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  "loc": {
    "country": "Brazil",
    "countryCode": "PT",
    "city": "Rio",
    "address": "17 Kombo st",
    "lat": -8.61308,
    "lng": 41.1413
  },
  "reviews": [
    {
      "id": "madeId",
      "txt": "Very helpful hosts. Cooked traditional...",
      "rate": 4,
      "by": {
        "_id": "u102",
        "fullname": "user2",
        "imgUrl": "/img/img2.jpg"
      }
    }
  ],
  "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
{
  "_id": "1000988",
  "name": "Ribeira Charming Duplex",
  "type": "House",
  "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
  "price": 80.00,
  "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
  "capacity": 8,
  "amenities": [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  "labels": [
    "Top of the world",
    "Trending",
    "Play",
    "Tropical"
  ],
  "host": {
    "_id": "u101",
    "fullname": "Davit Pok",
    "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  "loc": {
    "country": "France",
    "countryCode": "PT",
    "city": "Paris",
    "address": "17 Kombo st",
    "lat": -8.61308,
    "lng": 41.1413
  },
  "reviews": [
    {
      "id": "madeId",
      "txt": "Very helpful hosts. Cooked traditional...",
      "rate": 4,
      "by": {
        "_id": "u102",
        "fullname": "user2",
        "imgUrl": "/img/img2.jpg"
      }
    }
  ],
  "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
]
_createStays()
