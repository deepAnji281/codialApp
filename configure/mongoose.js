const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codial_development');
const db=mongoose.connection;
db.on('error',console.error.bind('error find in to connecting the database'));
db.once('open',()=>{
    console.log('successfully connected to : mongodb');
})

module.exports=db;