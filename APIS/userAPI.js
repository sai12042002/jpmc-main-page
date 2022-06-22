require('dotenv').config()
const asyncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const exp=require('express')
const jwt=require('jsonwebtoken')
const userApp=exp.Router()
let cloudinary=require("cloudinary").v2;
const {CloudinaryStorage} =require("multer-storage-cloudinary")
const multer=require("multer")
//configure cloudinary
cloudinary.config({
    cloud_name:process.env.COULD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    secure:true
});
//configure cloudinary storage
const cloudinaryStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:async(req,file)=>{
        return {
            folder:"Poorna",
            public_id:file.fieldname+'-'+Date.now()
        }
    }
});
//configure  multer
let upload = multer({storage:cloudinaryStorage})
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
    let tempUser=await userCollectionObj.findOne({username:userObj.username})
    console.log(tempUser)
    if(tempUser===null){
        response.send({message:"Invalid users"})
    }
    else{
        const status=await bcrypt.compare(userObj.password,tempUser.password)
        if(status==false){
            response.send({message:"Invalid password"})
        }
        else{
            let token=jwt.sign({username:userObj.username},''+process.env.SECURITY,{expiresIn:60})
            response.send({message:"Login success",payload:token,userdata:tempUser})
        }
    }
}))

//create a route to create-user path

userApp.post('/create-user',upload.single("photo"),asyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj");
    let newUser=JSON.parse(request.body.userObj);
    // let userObj=await userCollectionObj.find().toArray();
    // let tempUser=userObj.filter(obj=>obj.newUser.username===newUser.username)
    let tempUser=await userCollectionObj.findOne({username:newUser.username})
    if(tempUser!==null){
        response.send({message:"The username already exist..please choose another.."})
    }
    else{
        let hashedPassword= await bcrypt.hash(newUser.password,5)
        newUser.password=hashedPassword;
        newUser.photo=request.file.path;
        await userCollectionObj.insertOne(newUser)
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