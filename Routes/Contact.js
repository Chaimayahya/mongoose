const express = require('express')
const { Addcontact } = require('../Controllers/Contact')
const {GetAllcontacts}= require('../Controllers/Contact')
const {Deletecontact} = require('../Controllers/Contact')
const {Updatecontact} = require('../Controllers/Contact')
const {GetOnecontact} = require('../Controllers/Contact')


const contactRouter= express.Router()

contactRouter.post('/addcontact',Addcontact)
contactRouter.get('/GetAllcontact',GetAllcontacts)
contactRouter.delete('/deleteContact/:id',Deletecontact)
contactRouter.put('/UpdateContact/:id',Updatecontact)
contactRouter.get('/getOneContact/:id',GetOnecontact)






module.exports=contactRouter