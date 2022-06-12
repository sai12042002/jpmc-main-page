import {configureStore} from '@reduxjs/toolkit';
import userLoginReducer from './slices/UserSlice'

export const store=configureStore({
    reducer:{
        userData:userLoginReducer
    }
})