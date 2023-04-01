// const logger = require('../services/logger.service')

// async function log(req, res, next) {
//   logger.info('Req was made')
//   next()
// }

// module.exports = {
//   log
// }

const logger = require('../services/logger.service')

async function log(req, res, next) {
  if (req.session && req.session.user) {
    logger.info('Req from: ' + req.session.user.fullname)
  }
  next()
}

module.exports = {
  log
  
}
