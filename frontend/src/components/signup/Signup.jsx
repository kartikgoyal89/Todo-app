import React, { useState } from 'react'
import './Signup.css';
import HeadingComp from './HeadingComp';

const Signup = () => {
  const  [Inputs,setInputs] = useState({email:"","username":"",password:""});
  const change = (e)=>{
    const [name,value] = e.target;
    setInputs({...Inputs,[name]:value});
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(Inputs);
  };
  return (
    <div className='signup'>
      <div className="container">
        <div className='row'>
            <div className='col-lg-8 d-flex justify-content-center align-items-center column'>
            <div className='d-flex flex-column w-100 p-5 sign-box'>
                <input 
                onChange={change} 
                value={Inputs.email} 
                type='email' 
                className='p-2 my-3 input-signup' 
                name='email' 
                placeholder='Enter Your Email'
                />
                <input 
                onChange={change} 
                value={Inputs.username} 
                type='username' 
                className='p-2 my-3 input-signup' 
                name='username' 
                placeholder='Enter Your Username'
                />
                <input 
                onChange={change} 
                value={Inputs.password} 
                type='password' 
                className='p-2 my-3 input-signup' 
                name='password' 
                placeholder='Enter Your Password'
                />

                <button 
                className='btn-signup p-2' 
                onClick={submit}>
                Sign up
                </button>
            </div>
            </div>
            <div className='col-lg-4 col-left d-flex justify-content-center align-items-center column'>
                <HeadingComp first="Sign" second="Up"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
