const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId


async function query() {
    console.log('query order service');
    try {
        var criteria = {};
        // var criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('order')
        var orders = await collection.find(criteria).toArray();
        // const { sortBy } = filterBy
        // stays = _sortQueriedArray(stays, { sortBy })
        return orders
    } catch (err) {
        console.log('err', err);

        logger.error('cannot find orders', err)
        throw err
    }
}






async function getById(orderId) {
    try {
        const collection = await dbService.getCollection('order')
        const order = collection.findOne({ '_id': ObjectId(orderId) })
        return order
    } catch (err) {
        console.log('err', err);

        logger.error(`while finding order ${orderId}`, err)
        throw err
    }
}

// async function remove(stayId) {
//     try {
//         const collection = await dbService.getCollection('stay')
//         await collection.deleteOne({ '_id': ObjectId(stayId) })
//         return stayId
//     } catch (err) {
//         logger.error(`cannot remove stay ${stayId}`, err)
//         throw err
//     }
// }

async function add(order) {
    try {
        const collection = await dbService.getCollection('order')
        const addedOrder = await collection.insertOne(order)
        return order
    } catch (err) {
        console.log('err', err);
        logger.error('cannot insert order', err)
        throw err
    }
}
async function update(order) {
    try {
        var id = ObjectId(order._id)
        delete order._id
        const collection = await dbService.getCollection('order')
        await collection.updateOne({ "_id": id }, { $set: {...order } })
        order._id = id
        return order
    } catch (err) {
        logger.error(`cannot update order ${orderId}`, err)
        throw err
    }
}

module.exports = {
    add,
    query,
    getById,
    update,
}




// async function query(filterBy) {

//     try {
//         // logger.info('JSON.parse(filterBy)', JSON.parse(filterBy));
//         const criteria = _buildCriteria(filterBy)
//         logger.info('criteria', criteria)
//         // const criteria = {}
//         // logger.info('filterBy', filterBy)

//         const collection = await dbService.getCollection('stay')
//         var toys = await collection.find(criteria).toArray()
//         return toys
//     } catch (err) {
//         logger.error('cannot find toys', err)
//         throw err
//     }
// }


// function _buildCriteria(filterBy) {
//     const criteria = {}

//     if (filterBy.name) {
//         criteria.name = { $regex: filterBy.name, $options: 'i' }

//         // const regex = new RegExp(filterBy.name, 'i')
//         // criteria.name = { $regex: regex }
//     }
//     // if (filterBy.inStock) {
//     //     // criteria.inStock = inStock
//     //     criteria.inStock = { $regex: filterBy.inStock, inStock === "true"
//     // }


//     // if (filterBy.labels.length) {
//     // criteria.labels = labels
//     // criteria.balance = { $gte: filterBy.minBalance }
//     // }

//     console.log('criteria', criteria);
//     return criteria
// }