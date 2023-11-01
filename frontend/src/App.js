import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home1 from './components/home/Home1'
import Home from './components/home/Home'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/signup/Signup'
import SignIn from './components/signup/SignIn'
import Todo from './components/Todo/Todo'

const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home1/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </Router>
      <Footer/>
    </div>
  )
}

export default App
