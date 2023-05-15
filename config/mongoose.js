const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/testproject")
.then(()=>{
    console.log("mongodb is connected")
})
.catch(()=>{
    console.log("error in connecting mongodb")
})


module.exports=mongoose;