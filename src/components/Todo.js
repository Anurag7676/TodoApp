import React from 'react'
import todoimg from '../image/Logo.png'
import { useState } from 'react';


const Todo = () => {
  const [InputData, setInputData] = useState('');
  const [Items, setItems] = useState([]);
  const addItem=()=>{
    if(!InputData)
    {
    }
    else
    {
      setItems([...Items,InputData]);
      setInputData('');

    }
  }

  const deleteitem=(id)=>{
    const updateItem= Items.filter((ele,idx)=>{
      return idx!==id;
    
    })
    setItems(updateItem);
  }
  const removeAll=()=>{
    setItems([])
  }

  return (
  <>


  <div className="main-div">
    <div className="child-div">
      <figure>
        <img src={todoimg} alt="todoimg" />
        <figcaption>Add Your Note Here</figcaption>
      </figure>
      <div className="addItems">
        <input type="text" placeholder='Add note...' value={InputData} onChange={(e)=>{setInputData(e.target.value)}} />
        <i className='fa fa-plus add-btn' title='Add Item' onClick={addItem}></i>

      </div>


      <div className="showItems">

      {
        Items.map((elem,idx)=>{
          return (
            <div className="eachItem" key={idx}>
            <h3> {elem} </h3>
            <i className='far fa-trash-alt add-btn' title='delete item' onClick={()=>{deleteitem(idx)}}></i>
          </div>
            
          )
        })
      }
      {/* {delete} */}
      <div className='showItems'>
        <button className='btn effect03 ' onClick={removeAll}><span>Remove ALL</span></button>
      </div>


      
      </div>

    </div>
  </div>
  </>

  )
}

export default Todo