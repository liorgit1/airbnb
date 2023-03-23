import { stayService } from '../services/stay.service.local.js'

export default {
    state : {
     stays : [
        {
          "_id": "10006546",
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
        }
      ],
      filterBy:{}
    },
      getters: {
          stays(state) {
              return state.stays;

        },
    },
        mutations: {
            // setStay(stays) {
            //     state.stays = stays
            // },
        },

        actions: {
            async loadStays({ commit, state }) {
                const stays = await stayService.query(state.filterBy)
                try {
                    commit({ type: 'setStay', stays })
                } catch (err) {
                    console.error('Cannot Load stays', err)
                    throw err
                }
            },

        }
    


            }
