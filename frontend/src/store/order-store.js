import { orderService } from "../../services/order-service.js"

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
   
    // async loadOrders({ commit, state }) {
    //     try {
    //         const orders = await orderService.query()
    //         commit({ type: 'setOrders', orders })
    //         console.log(orders)
    //         socketService.off(SOCKET_EVENT_ORDER_ABOUT_YOU)
    //         socketService.on(SOCKET_EVENT_ORDER_ABOUT_YOU, order => {
    //             console.log('New order!', order);
    //             commit({ type: 'addOrder', order })
    //             commit({ type: 'newOrder', order })
    //         })
    //         socketService.off(SOCKET_EVENT_ORDER_UPDATED)
    //         socketService.on(SOCKET_EVENT_ORDER_UPDATED, order => {
    //             console.log('Order updated!', order);
    //             commit({ type: 'updateOrder', order })
    //             commit({ type: 'orderUpdated', order })
    //         })
    //     } catch (err) {
    //         console.log('orderStore: Error in loadOrders', err)
    //         throw err
    //     } finally {
    //         commit({ type: 'setLoading', isLoading: false })
    //     }


    // },



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