const express=require('express');
const bodyParser=require('body-parser')
const db=require('./config/mongoose')


const app=express();
app.use(bodyParser.urlencoded({extended:true}))



app.get('/',(req, res)=>{
    return res.send("<h1>Hello World!</h1>")
})

app.use('/api/v1', require('./routes'))








app.listen(8000, ()=>{
    console.log("app is listening on port 8000")
})