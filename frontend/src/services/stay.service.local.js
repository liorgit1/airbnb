
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


async function query(filterBy = { txt: '', price: 0 }) {
    var stays = await storageService.query(STORAGE_KEY)

    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.description))
    }
    // if (filterBy.price) {
    //     stays = stays.filter(stay => stay.price <= filterBy.price)
    // }
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


// TEST DATA
// ; (async () => {
//     await storageService.post(STORAGE_KEY, {
//         "_id": "10006546",
//         "name": "Ribeira Charming Duplex",
//         "type": "House",
//         "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/pictures/miso/Hosting-44695391/original/bd5d1aa0-57d1-45f7-ae99-01562b0e61d0.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/101293ac-7c8f-4d58-9228-cf6112cdada2.jpg?im_w=720","https://a0.muscache.com/im/pictures/miso/Hosting-44695391/original/2471e8e6-c764-4219-8665-04106757c213.jpeg?im_w=1200"],






//         "price": 80.00,
//         "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
//         "capacity": 8,
//         "amenities": [
//             "TV",
//             "Wifi",
//             "Kitchen",
//             "Smoking allowed",
//             "Pets allowed",
//             "Cooking basics"
//         ],
//         "labels": [
//             "Top of the world",
//             "Trending",
//             "Play",
//             "Tropical"
//         ],
//         "host": {
//             "_id": "u101",
//             "fullname": "Davit Pok",
//             "imgUrl": "https://a0.muscache.com/im/pictures/user/c977c377-7fc9-47d4-92ce-e1c761156bfe.jpg?im_w=240",
//         },
//         "loc": {
//             "country": "Portugal",
//             "countryCode": "PT",
//             "city": "Porto",
//             "address": "17 Kombo st",
//             "lat": -8.61308,
//             "lng": 41.1413
//         },
//         "reviews": [
//             {
//                 "id": "madeId",
//                 "txt": "Very helpful hosts. Cooked traditional...",
//                 "rate": 4,
//                 "by": {
//                     "_id": "u102",
//                     "fullname": "user2",
//                     "imgUrl": "/img/img2.jpg"
//                 }
//             }
//         ],
//         "likedByUsers": ['mini-user'] // for user-wishlist : use $in
//     })
// })()