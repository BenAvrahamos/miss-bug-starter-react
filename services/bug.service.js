
import { utilService } from '../services/utils.service.js'


export const bugService = {
    query,
    getById
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
