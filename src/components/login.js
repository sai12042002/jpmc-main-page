import img2 from '../images/img2.svg';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import {userLogin} from '../slices/UserSlice';
import Loader from './loader/Loader'
function Login(){
    let {userObj,isPending,isFulfilled,isRejected,errMsg}=useSelector((state)=>state.userData)
    const {register,handleSubmit,formState:{errors}}=useForm();
    let dispatch=useDispatch()
    let navigate=useNavigate()
    const onFormSubmit=(loginData)=>{
        dispatch(userLogin(loginData))
    }
    useEffect(() => {
        if (isFulfilled) {
          navigate("/userdashboard");
        }
      }, [isFulfilled, isRejected]);
    return(
        <>
        {isPending===true && <Loader/>}
        <div className='m-5 row'>
            <img src={img2} width="350px" className='col-sm-7 col-lg-5' />
            <div className='col-sm-5 col-lg-4 mx-auto m-5'>
                <h1>Login</h1>
                <hr />
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className='mb-3'>
                        
                    <div class="form-check">
                            <input class="form-check-input" type="radio" id="user" value="User" {...register("usertype",{required:true})}/>
                            <label class="form-check-label" htmlFor="user">
                                User
                            </label>
                            </div>
                            <div class="form-check">
                            <input className="form-check-input" type="radio" id="admin" value="Admin" checked {...register("usertype",{required:true})}/>
                            <label className="form-check-label" htmlFor="admin">
                                Admin
                            </label>
                            </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="username" className='form-label'>Username</label>
                        <input type="text" className='form-control' {...register("username",{required:true})} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' {...register("password",{required:true})} />
                    </div>
                    <div className='mb-3'>
                        <button type="submit" className='btn btn-info'>Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;