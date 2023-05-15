const express=require('express');
const productsController=require('../controllers/productsController')
const router=express.Router();


router.get('/', productsController.allProducts);

router.get('/top_selling', productsController.topQtyProducts);

router.get('/product_details', productsController.productDetails)


router.put('/update', productsController.updateProduct)















module.exports=router;