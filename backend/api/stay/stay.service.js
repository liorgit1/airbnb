const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const { ObjectId } = require('mongodb')

async function query(filterBy, sortBy) {
  try {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('stay')
      var stays = await collection.find(criteria).sort(sortBy).toArray()
    console.log(stays)
    return stays
  } catch (err) {
    // logger.error('cannot find stays', err)
    throw err
  }
}

async function getById(stayId) {
  try {
    const collection = await dbService.getCollection('stay')
    const stay = collection.findOne({ _id: new ObjectId(stayId) })
    return stay
  } catch (err) {
    logger.error(`while finding stay ${stayId}`, err)
    throw err
  }
}

async function remove(stayId) {
  try {
    const collection = await dbService.getCollection('stay')
    const {
      value: { name },
    } = await collection.findOneAndDelete({ _id: new ObjectId(stayId) })
    return name
  } catch (err) {
    logger.error(`cannot remove stay ${stayId}`, err)
    throw err
  }
}

async function add(stay) {
  try {
    const collection = await dbService.getCollection('stay')
    const { insertedId } = await collection.insertOne(stay)
    stay._id = insertedId
    return stay
  } catch (err) {
    logger.error('cannot insert stay', err)
    throw err
  }
}

async function update(stay) {
  try {
    const stayToSave = {
      name: stay.name,
      price: stay.price,
      locations: stay.loc,
      capacity: stay.capacity,
    }
    const collection = await dbService.getCollection('stay')
    await collection.updateOne({ _id: new ObjectId(stay._id) }, { $set: stayToSave }) //OK??
    return stay
  } catch (err) {
    logger.error(`cannot update stay ${stay._id}`, err)
    throw err
  }
}

async function addStayMsg(stayId, msg) {
  try {
    msg.id = utilService.makeId()
    const collection = await dbService.getCollection('stay')
    await collection.updateOne({ _id: new ObjectId(stayId) }, { $push: { msgs: msg } })
    return msg
  } catch (err) {
    logger.error(`cannot add toy msg ${stayId}`, err)
    throw err
  }
}

async function removeStayMsg(stayId, msgId) {
  try {
    const collection = await dbService.getCollection('stay')
    await collection.updateOne({ _id: new ObjectId(stayId) }, { $pull: { msgs: { id: msgId } } })
    return msgId
  } catch (err) {
    logger.error(`cannot add stay msg ${stayId}`, err)
    throw err
  }
}

function _buildCriteria(filterBy) {
  let criteria = {};
  if (!filterBy.country && !filterBy.type && !filterBy.price) return criteria
  if (filterBy.country) {
      const regex = { $regex: filterBy.country, $options: 'i' }
      criteria.$or = [{ 'loc.country': regex },
          { 'loc.city': regex }
      ]
  }
  if (filterBy.type) {
      criteria.roomType = { $in: filterBy.type }
  }

  if (filterBy.amenities) {
      criteria.amenities = { $in: filterBy.amenities }
  }
  if (filterBy.price) {
      filterBy.price = JSON.parse(filterBy.price)
      criteria.price = ({ $gte: +filterBy.price.minPrice, $lte: +filterBy.price.maxPrice })
  }
  console.log('criteria', criteria)
  return criteria

}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
  addStayMsg,
  removeStayMsg,
}
