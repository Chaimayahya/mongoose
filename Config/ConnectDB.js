const mongoose = require ('mongoose')

const ConnectDB =async()=>{

try {
    
    await mongoose.connect('')
    console.log('DB is connected')
} catch (error) {
   console.log(error) 
    
}

}
module.exports = ConnectDB