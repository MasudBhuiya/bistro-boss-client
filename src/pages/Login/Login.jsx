// import React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const loaction = useLocation();
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)

  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])

const from = loaction.state?.from?.pathname || '/';
  const handleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: 'User Login Successful.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleValidateCaptcha = () =>{
      const user_captch_value = captchaRef.current.value;
      console.log(user_captch_value);
      if(validateCaptcha(user_captch_value)){
        setDisabled(false)
      }else{
        setDisabled(true)
      }
  }


    return (
        <>
        <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" ref={captchaRef} name="captcha" placeholder="type the Captcha above" className="input input-bordered"  />
        </div>
          
          <p className='btn btn-outline btn-xs mt-2' onClick={handleValidateCaptcha} >Validate</p>
          {/**TODO: make button for captcha */}
        <div className="form-control mt-6 ">
          <input disabled={false} className="btn btn-primary" type="submit" value="Login" name="" id="" />
        </div>
      </form>
      <p className='text-center mt-5 mb-5'>New Here?<Link to='/register' className='btn btn-link'>Create an account</Link></p>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;