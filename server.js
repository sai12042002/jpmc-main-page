const exp=require('express') //express module returns a function.
const userApp=require('./APIS/userAPI')
const productApp=require('./APIS/productAPI')
// import dotenv
require('dotenv').config()
//creating the server...
const app=exp()
//import path for connecting..
const path=require('path')

//connecting back-end

app.use(exp.static(path.join(__dirname,'./build')))

//creating a mongoclient..
const mdbClient=require('mongodb').MongoClient
//Database connection...
const Database=process.env.DATA_BASE_URl;
//calling connect method on mongoclient with database url
mdbClient.connect(Database)
    .then((client)=>{
        //get DB object
        let dbObj=client.db("DemoDB");
        //get collections
       let userCollectionObj= dbObj.collection("usercollection");
       let productCollectionObj=dbObj.collection("productcollection");
       //sharing collection objs with apis
       app.set("userCollectionObj",userCollectionObj)
       app.set("productCollectionObj",productCollectionObj)
       console.log("Database connected successfully")
    })
    .catch(err=>console.log("Error occured in DB",err))



app.use('/user-api/',userApp)
app.use('/product-api/',productApp)
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})
const port=process.env.PORT || 4000
app.listen(port,()=>console.log(`Server listening on port ${port}...`))

app.use((request,response,next)=>{
    response.send({message:`The path ${request.url} is invalid..`})
})
app.use((error,request,response,next)=>{
    response.send({message:`Error Occured`,reason:error.message})
})