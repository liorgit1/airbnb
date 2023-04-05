import { orderService } from '../services/order-service'

export default {
    state: {
        orders: [],
    },
    getters: {
    },
    mutations: {
        setOrder(state, { newOrder }) {
            state.orders.unshift(newOrder)
        },

    },

    actions: {




        async addNewOrder({ commit }, { orderToSave }) {
            try {
                const newOrder = await orderService.add(orderToSave)
                console.log(orderToSave);
                console.log(newOrder);
                commit({ type: 'setOrder', newOrder })
                commit({ type: 'addOrderUser', newOrder })
                return newOrder
            } catch (err) {
                console.log('orderStore: error in addOrder', err)
            }

        },

    }
}