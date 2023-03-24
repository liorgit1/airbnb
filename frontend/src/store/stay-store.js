import { stayService } from '../services/stay.service.local.js'

export default {
    state : {
     stays : [],
      filterBy:{}
    },
    getters: {
        stays(state) {
            return state.stays;

      },
  },
    mutations: {
        setStay(state,{stays}) {
            state.stays = stays
        },
    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },
    },

    actions: {


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



        }
