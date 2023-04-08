// import { storageService } from './async-storage-service.js'
// import { utilService } from './util-service.js'
import { httpService } from './http.service.js'





const ENDPOINT = 'stay'
const STAYS_KEY = 'staysDB'
    // _createStay()


export const stayService = {
    query,
    getById,
    save,
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

async function save(stay) {
    if (stay._id) { 
        return await httpService.put(`stay/${stay._id}`, stay)
            // return axios.put(_getUrl(stay._id), stay).then(res => res.data)
    } else
    console.log('were going to the backend')
    return httpService.post('stay', stay)
        // return axios.post(_getUrl(), stay).then(res => res.data)
}







