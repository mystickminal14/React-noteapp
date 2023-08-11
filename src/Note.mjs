import React, { useState } from "react";
import Text from "./Text.mjs";

export default function Note() {
  const [text, setText] = useState({
    title: "",
    body: "",
  });

  const write = (e) => {
    const val = e.target.value;
    const te = e.target.name;
    setText((prevText) => ({
      ...prevText,
      [te]: val,
    }));
  };

  const [newTIT, setNewTIT] = useState([]);

  const addi = (e) => {
    e.preventDefault();
    setNewTIT((prev)=>{
      return [...newTIT,text]
    })
    setText({
      title:"",
      body:""
    })
  };
  const del = (id) => {
    setNewTIT((val) => {
      return val.filter((gg, index) => {
console.log(val)
        return index !== id;
         // Compare with the index, not the object
      });
    });
  };
  return (
    <>
      <div className="container">
        <div className="create">
          <input
            type="text"
            placeholder="Title"
            onChange={write}
            value={text.title}
            name="title"
            autoComplete="off"
          />
          <textarea
            rows="4" // Adjust the number of rows and cols as needed
            cols="50"
            onChange={write}
            value={text.body}
            name="body"
            placeholder="Write a note"
          />
          <button className="add" onClick={addi}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      {
        newTIT.map((val,index)=>{
        return  <Text key={index} id={index} select={del} tile={val.title} body={val.body} />
        })
      }
      
    </>
  );
}
