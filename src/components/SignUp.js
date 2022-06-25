import {useForm} from 'react-hook-form';

import {useNavigate} from "react-router";
import axios from 'axios'
import React,{ useState } from 'react';
import {useTranslation} from 'react-i18next';
function SignUp(){
    const {t}=useTranslation();
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()
    let [img,setImg]=useState(null);
    const onImageSelect=(event)=>{
        setImg(event.target.files[0])
    }
    const onFormSubmit=(userObj)=>{
        let formData= new FormData()
        formData.append("userObj",JSON.stringify(userObj))
        formData.append("photo",img)
        axios.post('http://localhost:3000/user-api/create-user',formData)
        .then(response=>{
            console.log(response)
            alert(response.data.message)
            if(response.data.message==="User Created successfully..."){
                navigate("/Login")
            }
        })
        .catch(error=>{
            console.log(error)
            alert(`error occured ${error}`)
        })
    }   
 return(
    <>
        <h1 className='display-4 text-center mt-2'>{t('sign')}</h1>
        <div className="row">
            <form className="mx-auto mt-5 col-lg-4 col-sm-7 col-11 border border-3 p-3 shadow shadow-3" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-2">
                    <label htmlFor="username" className="form-label">{t('username')}</label>
                    <input type="text" className='form-control' {...register("username",{required:true})}/>
                    {errors.username?.type==="required" && <p className='text-danger'> <p>{t('username_err')}</p> </p>}
                </div>
                <div className="mb-2">
                <label htmlFor="email" className="form-label">{t('email')}</label>
                <input type="text" id="email" className="form-control" {...register("email",{required:true})}/>
                {errors.email?.type==="required" && <p className='text-danger'> <p>{t('email_err')}</p></p>}
                </div>`
                <div className="mb-2">
                <label htmlFor="p`assword" className="form-label">{t('pass')}</label>
                <input type="password" className="form-control" {...register("password",{required:true})}/>
                {errors.password?.type==="required" && <p className='text-danger'><p>{t('pass_err')}</p></p>}
                </div>
                
                <button type="submit" className="btn btn-info float-end">{t('submit')}</button>
            </form>
        </div>
        </>
    )
}
export default SignUp;