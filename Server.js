const express = require('express')
const ConnectDB = require('./Config/ConnectDb')
const contactRouter = require('./Routes/Contact')

const app = express()

const port = 5000

ConnectDB() 

app.use(express.json())

app.use('/api/contact'contactRouter)

app.listen(port,console.log(`welcome Server is running in port ${port}`))