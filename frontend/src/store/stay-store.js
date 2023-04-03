import { stayService } from '../services/stay-service'
// import { stayService } from '../services/./stay.service.local'

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
                maxPrice: 1000
            },
            amenities: [],
        },
    },
    getters: {
        stays(state) {
            return state.stays;
        },
        guests(state) {
            return state.guests
        }
    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },
        setFilter(state, { filterBy }) {
            if (filterBy.country) state.filterBy.country = filterBy.country
            if (filterBy.price) state.filterBy.price = filterBy.price
            if (filterBy.type) state.filterBy.type = filterBy.type
            if (filterBy.guests) state.filterBy.guests = filterBy.guests
            if (filterBy.stayTime) state.filterBy.stayTime = filterBy.stayTime
            if (filterBy.amenities) state.filterBy.amenities = filterBy.amenities
        },
        setGuestsNum(state, { guestsNum }) {
            state.guestsNum = guestsNum
        },

        ratedStays(state, { filterBy }) {
            state.filterBy.country = filterBy
        },

        uniqueStays(state, { filterBy }) {
            state.filterBy.country = filterBy
        }


    },
    actions: {
        async loadStays({ commit, state }) {
            try {
                const stays = await stayService.query(state.filterBy)
                commit({ type: 'setStay', stays })
            } catch (err) {
                console.error('Cannot Load stays', err)
                throw err
            }
        },
        async setFilter({ commit, dispatch }, { filterBy }) {
            console.log(filterBy)
            try {
                commit({ type: 'setFilter', filterBy })
                dispatch({ type: 'loadStays' })
            } catch {
                console.error(err)
            }

        }
    }


}



