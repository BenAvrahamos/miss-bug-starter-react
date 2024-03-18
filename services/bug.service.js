
import { utilService } from '../services/utils.service.js'


export const bugService = {
    query,
    getById,
    remove
}

const bugs = utilService.readJsonFile('data/bugs.json')

function query() {
    return Promise.resolve(bugs)
}


function getById(id) {
    const bug = bugs.find(bug => bug._id === id)
    if (!bug) return Promise.reject('Bug Does no Exists')
    return Promise.resolve(bug)
}

function remove(id){
    const bugIdx = bugs.findIndex(car => car._id === id)
    bugs.splice(bugIdx,1)
    return Promise.resolve(bugs)
}

    
