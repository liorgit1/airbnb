import { stayService } from '../services/stay.service.local.js'

export default {
    state: {
        stays: [],
        filterBy: {}
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
        setFilter(state, {filterBy}) {
            if(filterBy.country) state.filterBy.country = filterBy.country
        }
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




