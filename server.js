import express from 'express'
import { bugService } from './services/bug.service.js'



const app = express()
// Express Routing:
app.get('/puki', (req, res) => {
res.send('Hello Puki')
})
app.get('/nono', (req, res) => res.redirect('/'))
const port = 3030
app.listen(port, () =>
console.log(`Server listening on port http://127.0.0.1:${port}/`)
)


app.get('/api/bug', (req, res) => {
    bugService.query()
        .then(bugs => {
            res.send(bugs)
        })
        // .catch(err => {
        //     loggerService.error('Cannot get cars', err)
        //     res.status(400).send('Cannot get cars')
        // })
})


// Get Car (READ)
app.get('/api/bug/save', (req, res) => {
    const bugToSave = {
        title: req.query.title,
        _id: req.query._id
    }
    bugService.save(bugToSave)
        .then(bug => res.send(bug))
        // .catch((err) => {
        //     loggerService.error('Cannot save car', err)
        //     res.status(400).send('Cannot save car')
        // })
})




app.get('/api/bug/:id',(req, res) => {
    const bugId = req.params.id
    bugService.getById(bugId)
    .then(bug => {
        res.send(bug)
    })
})

app.get('/api/bug/:id/remove',(req, res) => {
    const bugId = req.params.id
    bugService.remove(bugId)
.then (() => res.send(bugId))
})
