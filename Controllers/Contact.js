exports.Addcontact = async(req,res)=>{

    try {
        const found= await Contact.findOne({email:req.body.email})
        if (found) {
            res.status(400).send('Email exists')
        }
        const newContact= new Contact(req.body)
        await newContact.save()
        res.status(200).send({MSG: 'New contact added' ,newContact})
    
    
    } catch (error) {
      res.status(500).send('Could not add contact')  
    }

    }
exports.GetAllcontacts = async(req,res)=>{
    try {
        const contacts= await Contact.find()

        res.status(200).send({MSG:'List Contacts',contacts})
        
    } catch (error) {
    res.status(500).send('Could not get contact')
        
    }
}
exports. Deletecontact =async(req,res)=>{
    try {
        const {id}=req.params
       await  Contact.findByIdAndDelete(id)
       res.status(200).send('Contact deleted')
        
    } catch (error) {
        res.status(500).send('could not delete contact')
        
    }
}
exports.Updatecontact=async(req,res)=>{
    try {
        const {id}= req.params
        await Contact.findByIdAndUpdate(id,{$set: req.body})
        res.status(200).send('Contat updated')
        
    } catch (error) {
        res.status(500).send('Could not Update Contact')
        
    }
}
exports.GetOnecontact=async(res,req)=>{
    try {
        const {id}= req.params
        const contact= await Contact.findByID(id)
        res.status(200).send(contact)

    } catch (error) {
        res.status(500).send('Could not get contact')
        
    }
}