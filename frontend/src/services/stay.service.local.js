
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

async function query(filterBy = { country: '', guests: 0, date: '' }) {
    var stays = await storageService.query(STORAGE_KEY)

    if (filterBy.txt) {
        const regex = new RegExp(filterBy.travelTo, 'i')
        stays = stays.filter(stay => regex.test(stay.loc.country) || regex.test(stay.description))
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
//         "imgUrls": [
//             "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
//             "https://a0.muscache.com/im/pictures/miso/Hosting-44695391/original/bd5d1aa0-57d1-45f7-ae99-01562b0e61d0.jpeg?im_w=1200",
//             "https://a0.muscache.com/im/pictures/101293ac-7c8f-4d58-9228-cf6112cdada2.jpg?im_w=720",
//             "https://a0.muscache.com/im/pictures/101293ac-7c8f-4d58-9228-cf6112cdada2.jpg?im_w=720",
//             "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=1200"

//         ]
//     });
// })();

const demoStays = [{
    "_id": "10006546",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "4",
    "date": "aug 19-26",
    "imgUrls": ["https://media.istockphoto.com/id/1255274133/photo/luxurious-beach-side-villa-with-swimming-pool-and-palm-trees-at-summer-sunset-scene.jpg?s=612x612&w=0&k=20&c=ZV7TQSRNAnJODeqHNQpAKMc-F3wVuEOB9-k0p2inevE=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "txt": "Very helpful hosts Very helpful hosts Very helpful hosts Very helpful hosts Very helpful hosts Very helpful hosts",
            "rate": 4.6,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large"
            }
        }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
{
    "_id": "1000777",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "3",
    "date": "jan 11-17",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
    "price": 777.00,
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
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.1,
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
    "guests": "4",
    "date": "may 6-9",
    "imgUrls": ["https://media.istockphoto.com/id/1283532082/photo/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset.jpg?s=612x612&w=0&k=20&c=AlUKu_HgyCeyrpeb9EVx0k8VG_Sngr-BFOO6ZQawS5o=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
    "price": 90.00,
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
        "beautiful sunset",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
    },
    "loc": {
        "country": "Usa",
        "countryCode": "PT",
        "city": "Boston",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413,
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
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4.9,
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
    "guests": "2",
    "date": "feb 14-20",
    "imgUrls": ["https://media.istockphoto.com/id/157525171/photo/villa-sunrise.jpg?s=612x612&w=0&k=20&c=l5eQDGar2pVuGOsuBoNYyUsPs1BPZ4_JmPMubVkC-vE=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "very welcoming house",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.6,
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
    "guests": "4",
    "date": "apr 24-29",
    "imgUrls": ["https://media.istockphoto.com/id/1221865626/photo/luxurious-modern-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=LXH-oj14anTW-Q7WQI7uovp87CTCqBn96zHA2waq-hQ=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "the kids loved it",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.1,
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
    "guests": "2",
    "date": "mar 13-19",
    "imgUrls": ["https://media.istockphoto.com/id/1227329047/photo/two-ampty-chairs-facing-magnificent-sunset-view-at-beach.jpg?s=612x612&w=0&k=20&c=z7HngBDSmIyrvduaiz5F9bVd9fblyRWb8AKe3pf09fY=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "3 beds",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.3,
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
    "guests": "3",
    "date": "jun 14-25",
    "imgUrls": ["https://media.istockphoto.com/id/925052286/photo/exclusive-luxury-villa-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1hy2ZI_grzLR9UBOlycPNNcivERN6NFqLtxhaRVzY-w=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "4 beds",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
    },
    "loc": {
        "country": "Usa",
        "countryCode": "PT",
        "city": "Colorado",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4.6,
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
    "guests": "2",
    "date": "oct 22-30",
    "imgUrls": ["https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "4 beds",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.6,
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
    "guests": "3",
    "date": "sep 22-28",
    "imgUrls": ["https://media.istockphoto.com/id/528487340/photo/beach-living-on-sea-view.jpg?s=612x612&w=0&k=20&c=-txUQWbvHNG6jOAPQrduesK9foBw8hQid6f3Y2GnwYo=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
    "price": 654.00,
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
        "6 beds",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.5,
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
    "_id": "10006546",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "4",
    "date": "aug 7-9",
    "imgUrls": ["https://media.istockphoto.com/id/629625894/photo/luxury-mediterranean-style-villa.jpg?s=612x612&w=0&k=20&c=Dno3g0Aayo77RljU19bTwUA4M7bUlhISs3LJ5IW0j1w=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "2 beds",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
    "guests": "3",
    "date": "feb 19-23",
    "imgUrls": ["https://media.istockphoto.com/id/175248296/photo/wooden-cottage-log-home-log-cabin.jpg?s=612x612&w=0&k=20&c=xfQ0E9EE9mFr8fG3XIkM5hQmaPpBNKRQKGo6aSzKUkw=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
    "price": 187.00,
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
        "4 beds",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.8,
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
    "_id": "10210888",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "5",
    "date": "nov 21-22",
    "imgUrls": ["https://media.istockphoto.com/id/611294084/photo/sea-view-house-with-pool-in-modern-design.jpg?s=612x612&w=0&k=20&c=CvuNZx_vZ6cOoPcHt-g-riyoySJ2RJ6Ny6MVvUAnRNk=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
    "price": 300.00,
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
        "3 beds",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
    },
    "loc": {
        "country": "Usa",
        "countryCode": "PT",
        "city": "Boston",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413,
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
    "_id": "1003988",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "4",
    "date": "dec 28-30",
    "imgUrls": ["https://media.istockphoto.com/id/1191376167/photo/island-villa.jpg?s=612x612&w=0&k=20&c=qJNjEwEFRJpJuitWhq_loxq4ECfQX4mgekhv4JedxgQ=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "5 beds",
        "relaxing and life changing expirence",
        "Trending",
        "Play",

    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.2,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            },
        }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
},
{
    "_id": "1033323",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "2",
    "date": "jul 11-13",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "6 beds!",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
    },
    "loc": {
        "country": "Israel",
        "countryCode": "PT",
        "city": "Tel Aviv",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413,
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4.8,
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
    "_id": "1330927",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "3",
    "date": "jun 10-15",
    "imgUrls": ["https://media.istockphoto.com/id/509553708/photo/tropical-modern-villa-exterior.jpg?s=612x612&w=0&k=20&c=rMmOmihiXHl6htuhYVzbfPdKAawYHFuNMhD32A0sWUg=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
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
        "2 beds",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.1,
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
    "_id": "1224322",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "1",
    "date": "jan 1-5",
    "imgUrls": ["https://media.istockphoto.com/id/156629930/photo/villa-in-autumn-mont-tremblant-quebec-canada.jpg?s=612x612&w=0&k=20&c=TmjcNZ1YT2rN-8wigX0Efzk2hOF1L6Kc8QWp7MNosXo=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
    "price": 131.00,
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
        "1 bed",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
    },
    "loc": {
        "country": "Usa",
        "countryCode": "PT",
        "city": "Utah",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4.6,
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
    "_id": "1222322",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "2",
    "date": "may 21-23",
    "imgUrls": ["https://media.istockphoto.com/id/1091875700/photo/colored-beach-houses-in-a-row.jpg?s=612x612&w=0&k=20&c=Tgh8phwOgYTc-wfilkUMBug2CUtPi5IPf6vH8Ie1K-0=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
    "price": 79.00,
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
        "3 beds",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
    "_id": "12223211",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "guests": "2",
    "date": "apr 2-4",
    "imgUrls": ["https://media.istockphoto.com/id/1254871777/photo/modern-minimalist-family-villa.jpg?s=612x612&w=0&k=20&c=IFWrSPJVEajIvY0fkcTDYf93fJvn2oISiiZY6B5GlCI=", "https://a0.muscache.com/im/pictures/2476f261-7505-468e-bd16-438087b83e04.jpg?im_w=1440"],
    "price": 1220.00,
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
        "4 beds",
        "Trending",
        "Play",
        "Tropical"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/2ff57666-087d-4e62-8871-68926adb89ba.jpg?aki_policy=profile_large",
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
            "rate": 4.4,
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
