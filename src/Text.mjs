import React from 'react'
import Note from './Note.mjs';
export default function Text(props) {
    
  return (
    <>
    <div className="memo">
        <h1>{props.tile}</h1>
        <p>{props.body}</p>
        <button className='cross'>
        <i className="fa-solid fa-trash" onClick={()=>{
          props.select(props.id)
        }}></i>
          </button>
    </div>
    </>
  )
}
