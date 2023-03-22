// import { storageService } from './async-storage-service.js'
// import { utilService } from './util-service.js'
import { httpService } from './http.service.js'





const ENDPOINT = 'stay'
const STAYS_KEY = 'staysDB'
    // _createStay()


export const stayService = {
    query,
    getById
}




async function query(filterBy) {
    try {
        return await httpService.get(ENDPOINT, filterBy)
    } catch {
        console.error('cannot load stays')
    }
}



async function getById(entityId) {
    try {
        return await httpService.get(`${ENDPOINT}/${entityId}`)
    } catch {
        console.error('cannot load stay')
    }
}


function _filterStays(stays, filterBy) {
    let filteredStays = stays
    if (filterBy.country) {

        const regex = new RegExp(filterBy.country, 'i')
        filteredStays = filteredStays.filter(stay => regex.test(stay.address.country || stay.address.city))
    }

    if (filterBy.type.length) {
        filteredStays = filteredStays.filter((stay) => {
            return filterBy.type.some((label) => {
                return label === stay.roomType
            })
        })
    }
    if (filterBy.price) {
        filteredStays = filteredStays.filter((stay) => {
            return stay.price > filterBy.price.minPrice && stay.price < filterBy.price.maxPrice
        })
    }

    return filteredStays
}




