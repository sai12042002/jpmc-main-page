import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const userLogin=createAsyncThunk("userlogin",async(userLoginDetails,thunkApi)=>{
let response=await axios.post('/user-api/login',userLoginDetails);
let data=response.data;
console.log(data)
if(data.message==="Login success"){
    localStorage.setItem("token",data.payload);
    console.log(data.userdata)
    return data.userdata;
}
if(data.message==="Invalid users" || data.message==="Invalid password"){
    return thunkApi.rejectWithValue(data);
}
})
const userLoginSlice=createSlice({
    name:"userLoginData",
    initialState:{
        userObj:{},
        isPending:false,
        isFulfilled:false,
        isRejected:false,
        errMsg:''
    },
    reducers:{},
    extraReducers:{
        [userLogin.pending]:(state,action)=>{
            state.isPending=true
        },
        [userLogin.fulfilled]:(state,action)=>{
            state.userObj=action.payload;
            state.isFulfilled=true;
            state.isRejected=false;
            state.isPending=false;
            state.errMsg='';
        },
        [userLogin.rejected]:(state,action)=>{
            state.isRejected=true;
            state.isPending=false;
            state.isFulfilled=false;
            state.errMsg=action.payload.message;
        }
    }
});
export const {}=userLoginSlice.actions;
export default userLoginSlice.reducer;