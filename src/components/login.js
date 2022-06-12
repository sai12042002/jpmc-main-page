import img2 from '../images/img2.svg';
import {useForm} from 'react-hook-form';
import {useSelector,useDispatch} from 'react-redux';
import {userLogin} from '../slices/UserSlice';
function Login(){
    // let {userObj,isPending,isFulfilled,isRejected,errMsg}=useSelector(state=>state.user)
    const {register,handleSubmit,formState:{errors}}=useForm();
    let dispatch=useDispatch()
    const onFormSubmit=(loginData)=>{
        dispatch(userLogin(loginData))
    }
    return(
        <>
        <div className='m-5 row'>
            <img src={img2} width="350px" className='col-sm-7 col-lg-5' />
            <div className='col-sm-5 col-lg-4 mx-auto m-5'>
                <h1>Login</h1>
                <hr />
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className='mb-3'>
                        <label htmlFor="username form-label">Username</label>
                        <input type="text" className='form-control' {...register("username",{required:true})} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password form-label">Password</label>
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