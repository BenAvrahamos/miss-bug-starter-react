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
