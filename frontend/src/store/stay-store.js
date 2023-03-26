import { stayService } from '../services/stay.service.local.js'

export default {
    state: {
        stays: [],
        filterBy: {},
        guestsNum: 0

    },
    getters: {
        stays(state) {
            return state.stays;
        },
        guestsNum(state) {
            return state.guestsNum
        }
    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },
        setGuestsNum(state, { guestsNum }) {
            state.guestsNum = guestsNum
            console.log('guestsNum :>> ', guestsNum);
            console.log('state.guestsNum :>> ', state.guestsNum);
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




