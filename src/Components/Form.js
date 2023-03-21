import React, { Component,useContext }  from 'react';
import { useForm } from 'react-hook-form';
import react, { useRef, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { setContribution } from './actions';


export default function Forms(){
const user=useSelector(state=>state.loginUser)
  const dispatch=useDispatch()
  console.log(user.userName,"form")
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit=(data)=>{
        dispatch(setContribution({ "Date":new Date(),
        "Contributor":data.name,
        "Type":"visa",
        "Sum":data.sum}))

console.log(data,"data")
Swal.fire({
  imageUrl: "../Pictures/thanks.png",
  text: "תזכה למצוות!",
  title: "התרומה נקלטה בהצלחה",
  icon: "success",
  // confirmButtonColor: "#3085d6"
})
      }
      return (
         
        <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label className='label'>שם</Form.Label>
            <Form.Control className='form'
           value={user.userName}
            // placeholder="הכנס שם"
            {...register("name", {
              required: "הכנס שם",
            })}
          />
          
          <Form.Label className='label'>סכום</Form.Label>
          <Form.Control className='form'
            type="number"
            // placeholder="Enter your password"
            {...register("sum", {
              required: "הכנס סכום",
              pattern: {
                value: /\d+/,
                message: "Please enter a valid password"
              }
            })}
          />
        
        <Form.Label className='label'>מספר אשראי</Form.Label>
  <Form.Control className='form'
    type="text"
    // placeholder="Enter visa card number"
    // pattern="[4][0-9]{12}([0-9]{3})?"
    required
  />
 <Form.Control.Feedback type="invalid">
    בבקשה הכנס מספר אשראי תקין
  </Form.Control.Feedback>
  <br/>
          <input type="submit" value={"send"} className="btn btn-warning"/>
        </form>
      );
}