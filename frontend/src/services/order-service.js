// import { storageService } from './async-storage-service.js'
import { utilService } from './util-service.js'
import { userService } from './user-service.js'
import { httpService } from './http.service.js'



const ORDERS_KEY = 'ordersDB'
const ENDPOINT = 'order'

export const orderService = {
    add,
    query,
    getById,
    getEmptyOrder,
    getTotalPrice,
    getStayTime
}



async function query() {
    try {
        return await httpService.get(ENDPOINT)
    } catch {
        console.error('cannot load orders')
    }
}
function getStayTime(order) {
    const start = new Date(order.startDate)
    const end = new Date(order.endDate)
    const diff = Math.abs(end - start)
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    console.log('days :>> ', days);
    return days
}


function getTotalPrice(order) {
    // console.log('order.startDate :>> ', order.startDate);
    // const days = Math.abs(order.startDate - order.endDate)
    // const diffDays = Math.ceil(days / (1000 * 60 * 60 * 24))
    // return (diffDays * order.pricePerNight)


    const startDate = new Date(order.startDate);
    const endDate = new Date(order.endDate);
    const days = Math.abs(startDate - endDate);
    const diffDays = Math.ceil(days / (1000 * 60 * 60 * 24));
    // console.log('gettotalprice');
    // console.log('startDate :>> ', startDate);
    // console.log('endDate :>> ', endDate);
    // console.log('days :>> ', days);
    // console.log('diffDays :>> ', diffDays);
    // console.log('order :>> ', order);
    // console.log('diffDays * order.pricePerNight :>> ', diffDays * order.pricePerNight);
    return (diffDays * order.pricePerNight);

}
async function getById(entityId) {
    try {
        return await httpService.get(`${ENDPOINT}/${entityId}`)
    } catch {
        console.error('cannot load order')
    }
}


async function add(orderDetails) {
    try {
        if (orderDetails._id) {
            orderDetails = await httpService.put(`${ENDPOINT}/${orderDetails._id}`, orderDetails);
            return orderDetails
        }
        else {
            const addedOrder = await httpService.post(ENDPOINT, orderDetails)
            console.log(addedOrder);
            return addedOrder
        }

    } catch {
        console.error('cannot load order')
    }


}

function getEmptyOrder() {
    const key = utilService.getRandomInt(0, 50)
    let userName = userService.getLoggedinUser()
    if (!userName) userName = { fullname: 'guset' }
    return {
        name: '',
        hostId: '',
        country: '',
        guestName: userName.fullname,
        stay_id: '',
        pricePerNight: '',
        guests: '',
        stayTime: '',
        status: 'Pending',
        ImgUrl: `https://i.pravatar.cc/150?img=${key}`,
        created: new Intl.DateTimeFormat(['ban', 'id']).format(new Date())
    };


}