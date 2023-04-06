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







