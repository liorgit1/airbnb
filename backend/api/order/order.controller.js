const orderService = require('./order.service.js');
const logger = require('../../services/logger.service');
const { Socket } = require('dgram');

// GET LIST
async function getOrders(req, res) {
    try {
        var queryParams = req.query;
        const orders = await orderService.query(queryParams)
        res.json(orders);

    } catch (err) {
        logger.error('Failed to get orders', err)
        res.status(500).send({ err: 'Failed to get orders' })
    }
}

// GET BY ID 
async function getOrderById(req, res) {
    try {
        const orderId = req.params.id;
        const order = await stayService.getById(stayId)
        console.log('orders', order);
        res.json(order)

    } catch (err) {
        logger.error('Failed to get order', err)
        res.status(500).send({ err: 'Failed to get order' })
    }
}

// post(addOrder)

async function addOrder(req, res) {
    try {
        const order = req.body;
        const addedOrder = await orderService.add(order)
        res.json(addedOrder)
    } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({ err: 'Failed to add order' })
    }
}

// PUT (Update Stay)
async function updateOrder(req, res) {
    try {
        const order = req.body;
        const updatedOrder = await orderService.update(order)
        // SocketService.emit('')
        res.json(updatedOrder)
    } catch (err) {
        logger.error('Failed to update order', err)
        res.status(500).send({ err: 'Failed to update order' })

    }
}

// DELETE (Remove Stay)
// async function removeStay(req, res) {
//   try {
//     const stayId = req.params.id;
//     const removedId = await stayService.remove(stayId)
//     res.send(removedId)
//   } catch (err) {
//     logger.error('Failed to remove Stay', err)
//     res.status(500).send({ err: 'Failed to remove Stay' })
//   }
// }

module.exports = {
    getOrders,
    getOrderById,
    addOrder,
    updateOrder,
    // removeStay
}