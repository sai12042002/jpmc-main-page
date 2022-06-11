const asyncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const exp=require('express')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const userApp=exp.Router()
//To extract body of request object.
userApp.use(exp.json())
//create a route to '/getusers' path

userApp.get('/getusers',asyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    const payload=await userCollectionObj.find().toArray()
    response.send({message:"Data Fetched..",payload:payload})
}))

//create a route to 'getusers/id' path

userApp.post('/login',asyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    userObj=request.body
    let usersData=await userCollectionObj.find().toArray()
    console.log(usersData)
    let tempUser=usersData.filter(obj=>obj.newUser.username===userObj.username)
    if(tempUser.length===0){
        response.send("Invalid users...")
    }
    else{
        const status=await bcrypt.compare(userObj.password,tempUser[0].newUser.password)
        if(status==false){
            response.send({message:"Invalid password..."})
        }
        else{
            let token=jwt.sign({username:userObj.username},process.env.SECURITY_KEY,{expiresIn:"1h"})
            response.send({message:"Login success",payload:token,userdata:tempUser[0].newUser.password})
        }
    }
}))

//create a route to create-user path

userApp.post('/create-user',asyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    let newUser=request.body
    let userObj=await userCollectionObj.find().toArray()
    let tempUser=userObj.filter(obj=>obj.newUser.username===newUser.username)
    console.log("data",tempUser)
    if(tempUser.length!==0){
        response.send({message:"The username already exist..please choose another.."})
    }
    else{
        let hashedPassword= await bcrypt.hash(newUser.password,5)
        newUser.password=hashedPassword
        await userCollectionObj.insertOne({newUser})
        response.send({message:"User Created successfully..."})
    }
}))


//create a route to update-user

userApp.put('/update-user',asyncHandler(async(request,response)=>{
    
}))

//create a route to delete-user

userApp.delete('/remove-user/:name',asyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    const passedName=request.params.name
    console.log(passedName)
    const result=await userCollectionObj.deleteOne({username:passedName})
    console.log(result)
    response.send({message:"User removed...."})
}))
module.exports=userApp