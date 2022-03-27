const express = require('express')
const application = express()

application.set("view engine", "ejs")

application.use(express.static(__dirname + '/views'));


application.get('/', (req, res) => {
    console.log("Refresh success.")
    res.render("index")
})
application.get('/select_menu', (req, res) => {
    console.log("Page 2 loaded.")
    res.render("select_menu")
})

const userRouter = require('./routes/users.js')
application.use('/users', userRouter)

const port = process.env.PORT || 3214;
application.listen(port)