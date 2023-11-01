import React from 'react'
import './Home.css';

const Home1 = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
    <div className='image-container'>
    <img src='https://images.pexels.com/photos/8099395/pexels-photo-8099395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='image-home1 display-flex flex-direction-column-reverse'/>
    <div className='one'>
    <h1 className='text-image'>
    Organize your <br/>
     work and life, finally!!!
     </h1>
    <p className='display-flex flex-column'>
    Become focused, organized, and calm with <br/>
    todo app. The World's #1 task manager.
    </p>
    <button className='home-btn p-2'>Make Todo List</button>
    </div>
    </div>
    {/* <div className="container d-flex justify-content-center align-items-center flex-column">
    <h1 className='text-center display-flex align-items-left'>
    Organize your <br/>
     work and life, finally!!!
     </h1>
    <p>
    Become focused, organized, and calm with <br/>
    todo app. The World's #1 task manager.
    </p> */}
   
    </div>
    // </div>
  )
}

export default Home1
