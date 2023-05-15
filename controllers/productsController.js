
const Products=require('../models/product')

module.exports.allProducts=async(req, res)=>{
    try{
           const allProducts=await Products.find({});
           return res.status(200).send({
            message:"Here are all products",
            data:{
                products:allProducts
            }
           })
    
    }catch(error){
        console.log(error);
        return res.status(500).send({
            message:"Internal server error",
        })
    }
}

module.exports.topQtyProducts=async(req, res)=>{
    try{
        const topProducts=await Products.find().skip(0).limit(10).sort({'qty':"desc"});
        return res.status(200).send({
            message:"Top products",
            data:{
                topSellingProducts:topProducts
            }
        })

    }catch(error){
        console.log("error in top qty products", error);
        return res.status(500).send({
            message:"Internal server error"
        })
    }
}


module.exports.productDetails = async (req, res) => {
    try {
        const lowStockProductsCount = await Products.countDocuments({qty:{$lt:100}});
        const productsInStockCount=await Products.countDocuments({qty:{$gt:0}});
        const categoriesCount=(await Products.distinct('groupName')).length;
        return res.status(200).send({
            message: "Top products",
            data: {
                lowStock:lowStockProductsCount,
                allItems:productsInStockCount,
                itemGroups:categoriesCount
            }
        })

    } catch (error) {
        console.log("error in products detail", error);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
}




module.exports.updateProduct = async (req, res) => {
    try {
        const {id, groupName, qty, price}=req.body;
        const newProduct=await Products.findByIdAndUpdate(id, {
            groupName,
            qty,
            price
        }, {new:true})
        return res.status(200).send({
            message: "Top products",
            data: {
                newProduct
            }
        })

    } catch (error) {
        console.log("error in updating product", error);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
}