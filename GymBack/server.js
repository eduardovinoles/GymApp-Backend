
const express = require('express')

const app = express()


const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.json());     
app.use(express.urlencoded())


const db = require('./src/utils/mongodb')

app.use(express.json())

const user = require('./src/routes/user')
app.use('/user', user)

const routines = require('./src/routes/userRoutines')
app.use('/routines', routines)

app.listen(3000, () => {
    console.log('Server on port 3000')
})
