const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const authController = require('./routes/auth-router');

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// set routing
app.use('/api/list-user', authController);

// app.get('/data', (req, res) => {
//     const query = "SELECT * FROM tb_user";
//     db.query(query, (error, result) => {
//         console.log(result)
//         response(200, result, 'Get data user', res)
//     })
// })

// app.post('/login', (req, res) => {
//     console.log({requestAPI: req.body})

//     const username = req.body.username
//     if (username === 'owen') {
        
//     }
//     res.send('Proses Login')
// })
