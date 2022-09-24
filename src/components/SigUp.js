import { Formik } from 'formik';
import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"

const SigUp = () => {
  

  const userSubmit=async(formdata)=>{
    console.log(formdata);
    const response = await fetch('http://localhost:5000/user/add', {
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    if(response.status === 200){
      console.log('request sent')
      Swal.fire({
        icon : 'success',
        title : 'Nice',
        text : 'User SigUp!!'
      })
    }else{
      console.log('some error occured');
    }
  }
  
  return (
    <div className='container mt-5  d-flex justify-content-center align-item-center'>
      <div className="col-md-5 col-lg-5">
      <div className='card px-4'>
      <ul>
      <li class="nav-item" role="presentation">
      <NavLink
      class="nav-link"
      id="tab-register"
      data-mdb-toggle="pill"
      to="/SigUp"
      role="tab"
      aria-controls="pills-register"
      aria-selected="false"
      >Register
      </NavLink>
      </li>
      </ul>


        <Formik
          initialValues={{name : '', email : '', password : ''}}
          onSubmit={userSubmit}
        >
          { ({values, handleSubmit, handleChange}) => (
            <form onSubmit={handleSubmit}>
<div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">

    <form>
      <div class="text-center mb-2">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>
    
      <p class="text-center">or:</p>

      <div class="form-group mb-2">
        <label class="form-label" for="registerName">Name</label>
        <input type="text" id="registerName" class="form-control" />
      </div>

      <div class="form-group mb-2">
        <label class="form-label" for="registerEmail">Email</label>
        <input type="email" id="registerEmail" class="form-control" />
      </div>

      <div class="form-group mb-2">
        <label class="form-label" for="registerPassword">Password</label>
        <input type="password" id="registerPassword" class="form-control" />
      </div>

      <div class="form-group mb-4">
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
        <input type="password" id="registerRepeatPassword" class="form-control" />
      </div>

      <div class="form-check d-flex justify-content-center mb-4">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value=""
          id="registerCheck"
          checked
          aria-describedby="registerCheckHelpText"
        />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
 </form>
 ) }
 </Formik>
        
      </div>
    </div>
  </div>
  )
}

export default SigUp;