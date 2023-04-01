const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getStays, getStayById, addStay, updateStay } = require('./stay.controller.js')
const router = express.Router()
// , removeStay, addStayMsg, removeStayMsg

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getStays)
router.get('/:id', getStayById)
router.post('/',  addStay)
router.put('/:id',  updateStay)
// router.delete('/:id',  removeStay)
     //router.delete('/:id', requireAuth, requireAdmin, removeStay)

// router.post('/:id/msg',  addStayMsg)
// router.delete('/:id/msg/:msgId', removeStayMsg)

module.exports = router