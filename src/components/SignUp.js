import {useForm} from 'react-hook-form';
import { BiLogInCircle } from "react-icons/bi";
import {useNavigate} from "react-router";
import axios from 'axios'
function SignUp(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()
    const onFormSubmit=(userObj)=>{
        axios.post('http://localhost:4000/user-api/create-user',userObj)
        .then(response=>{
            console.log(response)
            alert(response.data.message)
            if(response.data.message==="User Created successfully..."){
                navigate("/login")
            }
        })
        .catch(error=>{
            console.log(error)
            alert(`error occured ${error}`)
        })
    }
 return(
    <>
        <h1 className='display-4 text-center mt-3'>SignUp</h1>
        <div className="row">
            <form className="mx-auto mt-5 col-lg-4 col-sm-7 col-11 border border-3 p-3 shadow shadow-3" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input type="text" className='form-control' {...register("username",{required:true})}/>
                    {errors.username?.type==="required" && <p className='text-danger'>*Username is Required</p>}
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" id="email" className="form-control" {...register("email",{required:true})}/>
                {errors.email?.type==="required" && <p className='text-danger'>*Email is Required</p>}
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" {...register("password",{required:true})}/>
                {errors.password?.type==="required" && <p className='text-danger'>*Password is Required</p>}
                </div>
                <button type="submit" className="btn btn-info">Submit <BiLogInCircle/> </button>
            </form>
        </div>
        </>
    )
}
export default SignUp;