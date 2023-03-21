import React, { useContext, useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch,connect }from "react-redux"
import {setDetails, setState } from './actions';

export default function UserDetails()
{
const dispatch = useDispatch()
const user=useSelector(state=>state.loginUser)
console.log(user,"user")
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
const onSubmit = (data) => {
  dispatch(setDetails({name:data.name,password:data.password,email:data.email}))

};
useEffect(() => {
  console.log(user,"user");
}, [user]);

// const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
return(
<div>
{user&& (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Label className='label'>שם</Form.Label>
                      <Form.Control className='form'
                     value={user.userName}
                    //   placeholder="Enter your name"
                      {...register("name", {
                        required: "Please enter your name",
                        // readOnly
                      })}
                    />
                     <Form.Label className='label'>סיסמא</Form.Label>
                    <Form.Control className='form'
                    value={user.password}
                      type="password"
                    //   placeholder="Enter your password"
                      {...register("password", {
                        required: "Please enter your password",

                      })}
                    />
                      <Form.Label className='label'>מייל</Form.Label>
            <Form.Control className='form'
            type="email"
            // placeholder="Enter your email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email"
              }
            })}
          />
          <br/>
                     <input type="submit" className="btn btn-warning"/>
            </form>
       
      )}
 </div>
)

}
