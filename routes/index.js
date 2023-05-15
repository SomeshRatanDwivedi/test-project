const express=require('express');
const router=express.Router();


router.get('/', (req, res)=>{
    return res.send("<h1>routes</h1>")
})

router.use('/products', require('./products'))












module.exports=router