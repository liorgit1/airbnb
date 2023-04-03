const stayService = require('../stay/stay.service.js')
const socketService = require('../../services/socket.service.js')
const logger = require('../../services/logger.service')

// async function getStays(req, res) {

//   try {

//       var queryParams = req.query
//       const stays = await stayService.query(queryParams)
//           // console.log('stays', stays);
//       res.json(stays);

//   } catch (err) {

//       logger.error('Failed to get stays', err)
//       res.status(500).send({ err: 'Failed to get stays' })
//   }
// }

async function getStays(req, res) {
  try {

    const filterBy = {
      stays:req.query || '',
      country: req.query.country || '',
      status: req.query.status || '',
      labels: req.query.labels || null,

    }
    const sortBy = req.query.sortTitle
    console.log(sortBy)
      ? {
          [req.query.sortTitle]: +req.query.sortDesc,
        }
      : {}

    // logger.debug('Getting Stays', filterBy)
    const Stays = await stayService.query(filterBy, sortBy)
    res.json(Stays)
  } catch (err) {
    console.log('error :>> ',err);
    // logger.error('Failed to get Stays', err)
    res.status(500).send({ err: 'Failed to get Stays' })
  }
}

async function getStayById(req, res) {
  try {
    const StayId = req.params.id
    const Stay = await stayService.getById(StayId)
    res.json(Stay)
  } catch (err) {
    logger.error('Failed to get Stay', err)
    res.status(500).send({ err: 'Failed to get Stay' })
  }
}

async function addStay(req, res) {
  const { loggedinUser } = req

  try {
    const Stay = req.body
    Stay.owner = loggedinUser
    const addedStay = await stayService.add(Stay)
    res.json(addedStay)

    if (loggedinUser.isAdmin) {
      socketService.broadcastAdminUpdate({
        productName: Stay.name,
        type: 'add',
        adminId: loggedinUser._id,
      })
    }
    // socketService.broadcastAdminUpdate
  } catch (err) {
    logger.error('Failed to add Stay', err)
    res.status(500).send({ err: 'Failed to add Stay' })
  }
}

async function updateStay(req, res) {
  try {
    const { loggedinUser } = req
    const Stay = req.body
    const updatedStay = await stayService.update(Stay)
    res.json(updatedStay)
    if (loggedinUser.isAdmin) {
      socketService.broadcastAdminUpdate({
        productName: Stay.name,
        type: 'update',
        adminId: loggedinUser._id,
      })
    }
  } catch (err) {
    logger.error('Failed to update Stay', err)
    res.status(500).send({ err: 'Failed to update Stay' })
  }
}

async function removeStay(req, res) {
  try {
    const { loggedinUser } = req
    const StayId = req.params.id
    const removedStayName = await stayService.remove(StayId)
    res.send()
    if (loggedinUser.isAdmin) {
      socketService.broadcastAdminUpdate({
        productName: removedStayName,
        type: 'remove',
        adminId: loggedinUser._id,
      })
    }
  } catch (err) {
    logger.error('Failed to remove Stay', err)
    res.status(500).send({ err: 'Failed to remove Stay' })
  }
}

async function addStayMsg(req, res) {
  const { loggedinUser } = req
  try {
    const StayId = req.params.id
    const msg = {
      txt: req.body.txt,
      by: loggedinUser,
    }
    const savedMsg = await stayService.addStayMsg(StayId, msg)
    res.json(savedMsg)
  } catch (err) {
    logger.error('Failed to update Stay', err)
    res.status(500).send({ err: 'Failed to update Stay' })
  }
}

async function removeStayMsg(req, res) {
  const { loggedinUser } = req
  try {
    const StayId = req.params.id
    const { msgId } = req.params

    const removedId = await stayService.removeStayMsg(StayId, msgId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove Stay msg', err)
    res.status(500).send({ err: 'Failed to remove Stay msg' })
  }
}

module.exports = {
  getStays,
  getStayById,
  addStay,
  updateStay,
  removeStay,
  addStayMsg,
  removeStayMsg,
}
