import {Formik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
   
  const SignSubmit = async(formdata ,{resetForm}) =>{
    console.log(formdata)


    const response = await fetch('http://localhost:5000/user/authenticate',{
      method:'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' :'application/json'
      }
    });

     if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Success',
        text : 'Loggedin Succeddfully'
      })
     }else if(response.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Failed',
          text : 'Loggedin Failed'
        })
     }else{
      console.log('unknown error ');
     }
    
  }


  return (
    <div className='container mt-4  d-flex justify-content-center align-item-center'>
      <div className="col-md-5 col-lg-5">
      <div className='card px-4'>
        {/* <h1 className='text-center'>Login Here</h1> */}
        <Formik initialValues={{
          email:"",
          password:"",
        }} onSubmit={SignSubmit}>
          {({values,handleChange,handleSubmit})=>(
     <form onSubmit={handleSubmit}>


<ul class="nav nav-pills nav-justified mb-2" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="tab-login"
      data-mdb-toggle="pill"
      href="#pills-login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      >Login</a>
  </li>
      

</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div class="text-center mb-3">
        <p>Sign in with:</p>
        <a href='https://www.facebook.com/' target = "_blank">
        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>
        </a>

          <a href='https://www.google.com' target = "_blank">
        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>
          </a>
         
          <a href='https://www.twitter.com/' target = "_blank">
        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>
        </a>
        
        <a href='https://github.com/' target = "_blank">
        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
        </a>

      </div>

      <p class="text-center">or:</p>

      <div class="form-group mb-4">
        <label class="form-label" for="loginName">Email or username</label>
        <input type="email" id="loginName" class="form-control"  placeholder='Enter Email Address :'/>
      </div>

      <div class="form-group mb-4">
        <label class="form-label" for="loginPassword">Password</label>
        <input type="password" id="loginPassword" class="form-control" placeholder='Enter Password :' />
      </div>

      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

      <div class="text-center">
        <p>Not a member? <a href="#">Register</a></p>
      </div>
    </form>
  </div>
  </div>
  </form>

)}
</Formik>
  </div>
  </div>
  </div>
  

  )

  }

export default Login;