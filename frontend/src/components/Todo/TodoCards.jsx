import React from 'react'
import {AiTwotoneDelete} from 'react-icons/ai';
import {GrDocumentUpdate} from 'react-icons/gr';

const TodoCards = ({title,body,id,delid,display}) => {
  return (
    <div className='p-3 todo-card'>
    <div>
      <h5>{title}</h5>
      <p className='todo-card-p'>
      {body.split("",77)}...
      </p>
    </div>
    <div className='d-flex justify-content-around'>
    <div className='card-icon-head px-2 py-1' 
    onClick={()=>{
      display("block");
    }}>
    <GrDocumentUpdate className='card-icons update'/> Update
    </div>
      <div className='card-icon-head px-2 py-1'
      onClick={()=>{
        delid(id);
        }}>
        <AiTwotoneDelete className='card-icons del'/> Delete
      </div>
    </div>
    </div>

  )
}

export default TodoCards
