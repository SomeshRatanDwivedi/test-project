
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    barcode:{
        type:Number,
        required:[true, "Barcode is missing"]
    },
    itemDesc:{
        type:String,
    },
    groupName:{
        type:String,
        required: [true, "Group name is missing"]
    },
    size:{
        type:String,
        required: [true, "size is missing"]
    },
    price: {
        type: Number,
        required: [true, "price is missing"]
    },
    qty: {
        type: Number,
        required: [true, "quantity is missing"]
    },
    profit: {
        type: Number,
    }

})


const Products=mongoose.model('products', productSchema);

module.exports=Products;