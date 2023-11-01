import React from 'react'
import './Signup.css';
import HeadingComp from './HeadingComp';

const SignIn = () => {
  return (
    <div>
      <div className='signup'>
      <div className="container">
        <div className='row'>
        <div className='col-lg-4 col-left d-flex justify-content-center align-items-center column'>
                <HeadingComp first="Sign" second="In"/>
            </div>
            <div className='col-lg-8 d-flex justify-content-center align-items-center column'>
            <div className='d-flex flex-column w-100 p-5 sign-box'>
                <input type='email' className='p-2 my-3 input-signup' name='email' placeholder='Enter Your Email'/>
                <input type='password' className='p-2 my-3 input-signup' name='password' placeholder='Enter Your Password'/>
                <button className='btn-signup p-2'>Sign In</button>
            </div>
            </div>
           
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignIn
