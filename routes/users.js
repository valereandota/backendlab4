const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.send("New user request")
})

router.post('/', (req, res) => {
    res.send('Create user')
})

router.get('/:pId', (req, res) => {
    res.send(`User get ${req.params.pId}`)
})
module.exports = router