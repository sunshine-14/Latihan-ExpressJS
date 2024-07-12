const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const userController = require('./routes/user-router');

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// set routing
app.use('/api/user', userController);