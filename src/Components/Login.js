import React, { useContext, useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch }from "react-redux"
import {  setState } from './actions';

export default function Login()
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
  dispatch(setState({isLogin:true,userName:data.name,password:data.password}))
console.log(user,"after")
};

// useEffect(() => {
//   console.log(user,"user");
// },[user] );
return(
<div className='parent'>
{user&& user.isLogin==false&& (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Label>Name</Form.Label>
                      <Form.Control className='form'
                     
                      placeholder="Enter your name"
                      {...register("name", {
                        required: "Please enter your name",
                      })}
                    />
                     <Form.Label>Password</Form.Label>
                    <Form.Control className='form'
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Please enter your password",

                      })}
                    />
                    
                     <input type="submit" />
            </form>
       
      )}
 </div>
)

}
