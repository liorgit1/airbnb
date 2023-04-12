import { orderService } from '../services/order-service'

export default {
    state: {
        currOrder: {},
        orders: [],
    },
    getters: {
        currOrder(state) {
            return state.currOrder
        },
    },
    mutations: {
        setOrder(state, { newOrder }) {
            state.orders.push(newOrder)
        },
        setCurrOrder(state, { newOrder }) {
            console.log('newOrder :>> ', newOrder);
            state.currOrder = newOrder
            console.log('state.currOrder :>> ', state.currOrder);
        },

    },

    actions: {




        async addNewOrder({ commit }, { orderToSave }) {
            try {
                const newOrder = await orderService.add(orderToSave)
                // console.log(orderToSave);
                console.log(newOrder);
                commit({ type: 'setOrder', newOrder })
                commit({ type: 'addOrderUser', newOrder: newOrder })
                return newOrder
            } catch (err) {
                console.log('orderStore: error in addOrder', err)
            }

        },

    }
}