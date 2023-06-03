import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit, reset,  formState: { errors } } = useForm();
  const navigate = useNavigate()

  const {signUp, updateUserProfile} = useContext(AuthContext)

  const onSubmit = data => {
    console.log(data);
    signUp(data.email, data.password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate('/')
      updateUserProfile(data.name, data.image)
      .then(()=>{
        console.log('user profile info updated');
        reset()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        console.log(error.message)
      })
      
    })
    .catch(error => {
      console.log(error.message)
    })
  };

    return (
        <>
        <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign-Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name is required!!!</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" {...register("image", { required: true })} name="image" placeholder="Image URL" className="input input-bordered" />
          {errors.image && <span className="text-red-600">Photo URL is required!!!</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
          {errors.email && <span className="text-red-600">Email is required!!!</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { 
            required: true, 
            minLength: 6,
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })} placeholder="password" className="input input-bordered" />
          {errors.password?.type === 'required' && <span className="text-red-600">Password is required!!!</span>}
          {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters!!!</span>}
          {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 characters!!!</span>}
          {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have 1 uppercase, 1 lowerCase, 1 number and a special characters!!!</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value='Sign-Up' name="" id="" />
        </div>
      </form>
      <p className='text-center mt-5 mb-5'>Already have an account?<Link to='/login' className='btn btn-link'>Please Login</Link></p>
    </div>
  </div>
</div>
</>
    );
};

export default Register;