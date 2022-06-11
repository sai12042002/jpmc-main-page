import {useForm} from 'react-hook-form'
function SignUp(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=(data)=>{
        console.log(data)
    }
 return(
        <div className="row">
            <h1 className='display-4 text-center mt-3'>SignUp</h1>
            <form className="mx-auto mt-5 col-lg-5 col-sm-8 col-11 border border-3 p-5 shadow shadow-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input type="text" className='form-control' {...register("username",{required:true})}/>
                    {errors.username?.type=="required" && <p className='text-danger'>*Username is Required</p>}
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" id="email" className="form-control" {...register("email",{required:true})}/>
                {errors.email?.type=="required" && <p className='text-danger'>*Email is Required</p>}
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" {...register("password",{required:true})}/>
                {errors.password?.type=="required" && <p className='text-danger'>*Password is Required</p>}
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>
    )
}
export default SignUp;