import { stayService } from '../services/stay.service.local.js'

export default {
    state: {
        stays: [],
        filterBy: {
            country: '',
            guests: {
                adults: 0,
                kids: 0,
                Infants: 0,
            },
            stayTime: '',
            type: [],
            price: {
                minPrice: 30,
                maxPrice: 150
            },
            amenities: [],
        },
    },
    getters: {
        stays(state) {
            return state.stays;

        },
    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },
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

