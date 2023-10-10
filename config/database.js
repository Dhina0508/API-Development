const mongoose=require('mongoose');

const dbconnect=()=>{
    mongoose.connect('mongodb+srv://dhina0508:QUralm3RZ4F9A633@practice.heys9dv.mongodb.net/',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        
        console.log("Database Connected Successfully");
    }).catch((err)=>{
        console.log('Something went wrong with the database connection',err);
    });
};

module.exports=dbconnect;