const exp=require('express')
//import express-async-handler
const asyncHandler=require('express-async-handler')
const productApp=exp.Router()
productApp.use(exp.json())//To extract the body...

//route to get all products
productApp.get('/getproducts',asyncHandler(async(request,response)=>{
const productCollectionObj=request.app.get("productCollectionObj")
let data=await productCollectionObj.find().toArray()
response.send({message:"Operation successfull..",payload:data})
}))


//route to get product by name
productApp.get('/getproduct/:name',asyncHandler(async(request,response)=>{
    const productCollectionObj=request.app.get("productCollectionObj")
    let name=request.params.name
    let data=await productCollectionObj.findOne({name:name})
    if(data==null){
        response.send({message:"Product not exist.."})
    }
    else{
        response.send({message:"Product find" , payload:data})
    }
}))


// route to create product

productApp.post('/createproduct',asyncHandler(async(request,response)=>{
    const productCollectionObj=request.app.get("productCollectionObj")
    let newProduct=request.body
    let result=await productCollectionObj.insertOne(newProduct)
    response.send({message:"The product added successfully.."})
    
}))

//route to update the product

productApp.put('/update-product',asyncHandler(async(request,response)=>{
    const productCollectionObj=request.app.get("productCollectionObj")
    let modifiedProduct=request.body
    await productCollectionObj.update({name:modifiedProduct.name},{$set:{...modifiedProduct}})
    response.send({message:"Data updated..."})
}))

//route to remove-product
productApp.delete('/remove-product/:name',asyncHandler(async(request,response)=>{
    const productCollectionObj=request.app.get("productCollectionObj")
    productName=request.params.name
    let result=await productCollectionObj.deleteOne({name:productName})
    if(result.deletedCount===0){
        response.send({message:"Prodoct Not removed.."})
    }
    else{
    response.send({message:"Product removed...."})
    }
}))

module.exports=productApp





//create product using callback function...
// productApp.post('/createproduct',(request,response)=>{
//     const productCollectionObj=request.app.get("productCollectionObj")
//     let newProduct=request.body
//     productCollectionObj.insertOne(newProduct,(err,result)=>{
//         if(err){
//             console.log("error occured..")
//         }
//         else{
//             response.send({message:"The product created successfully..."})
//         }

//     })
// })


//create product using promise

// productApp.post('/createproduct',(request,response)=>{
//     const productCollectionObj=request.app.get("productCollectionObj")
//     let newProduct=request.body
//     productCollectionObj.insertOne(newProduct)
//     .then(res=>response.send({message:"The product added succesfully..."}))
//     .catch(err=>console.log(err))
// })
// module.exports=productApp