//API request

router.get('/', log, getStays)

//controller function

async function getStays(req, res) {
    try {
  
      const filterBy = {
        stays:req.query || '',
        country: req.query.country || '',
        status: req.query.status || '',
        labels: req.query.labels || null,
  
      }
      const sortBy = req.query.sortTitle
      
        ? {
            [req.query.sortTitle]: +req.query.sortDesc,
          }
        : {}
  
      logger.debug('Getting Stays', filterBy)
      const Stays = await stayService.query(filterBy, sortBy)
      res.json(Stays)
    } catch (err) {
      logger.error('Failed to get Stays', err)
      res.status(500).send({ err: 'Failed to get Stays' })
    }
  }



  async function query(filterBy, sortBy) {
    try {
      const criteria = _buildCriteria(filterBy)
      const collection = await dbService.getCollection('stay')
      var stays = await collection.find(criteria).sort(sortBy).toArray()
      
      return stays
    } catch (err) {
      logger.error('cannot find stays', err)
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