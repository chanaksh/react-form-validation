import React from "react";
import { useState } from "react";
import "./Input.css"
const Input = ({label,onChange,errorMassage,...otherProps})=>{
  let [focused,setFocused]=useState(false)
    return(
        <div className="inputField">
            <label htmlFor="">{label}</label>
            <input {...otherProps} 
            onChange={onChange} 
            onBlur={()=>setFocused(true)}
            focused={focused.toString()}
           
            />
            <span>{errorMassage}</span>
        </div>
    )
}

export default Input;