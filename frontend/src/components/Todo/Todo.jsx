import React, { useState } from 'react'
import './Todo.css'
import TodoCards from './TodoCards';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';

const Todo = () => {
    const [Inputs,setInputs] = useState({title:"",body:""})
    const [Array,setArray] = useState([]);
    const show =()=>{
         document.getElementById("textarea").style.display = "block";
    }
    const change =(e)=>{
        const {name,value} = e.target;
        setInputs({...Inputs,[name]:value});
    }
    const dis = (value)=>{
      console.log(value);
      document.getElementById("todo-update").style.display = value;
    }
    const submit = ()=>{
        if(Inputs.title=="" || Inputs.body === ""){
        toast.error('Your Task is Empty!');

        }
        else{
        setArray([...Array,Inputs])
        setInputs({title:"",body:""});
        toast.success('Task Added Succesfully!');
        toast.error('Task not Saved yet! Please Signup!');
        }  
    };

    const del = (id) =>{
      Array.splice(id,"1");
      setArray([...Array]);
    }

  return (
    <>
    <div className='todo'>
    <ToastContainer />
      <div className="todo-main container d-flex justify-content-center flex-column align-items-center">
      <div className='d-flex flex-column todo-inputs-div w-50 p-1'>
        <input 
        type="text" 
        placeholder='TITLE' 
        className='my-2 p-2 todo-inputs' 
        onClick={show}
        name="title"
        value={Inputs.title}
        onChange={change}
        />
        <textarea id="textarea"
        type="text" 
        name="body"
        value={Inputs.body}
        placeholder='BODY' 
        className='p-2 todo-inputs'
        onChange={change}
        />
      </div>
      <div className='w-50 d-flex justify-content-center align-items-center my-3'>
      <button className='home-btn add-task-btn px-2 py-1' onClick={submit}>Add Task</button>
      </div>
      </div>
      <div className="todo-body">
        <div className="container-fluid">
        <div className='row'>
        {Array && 
            Array.map((item,index)=> (
            <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
            <TodoCards title={item.title} body={item.body} id={index} delid={del} display={dis}/>
            </div>
            ))}
        </div>
            
        </div>
      </div>
    </div>
    <div className="todo-update" id="todo-update">
    <div className="container update">
    <Update display={dis}/>
    </div>
    </div>
    </>
  )
}

export default Todo
