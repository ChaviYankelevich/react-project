import { useForm } from 'react-hook-form';
import react, { useRef, useState } from 'react';
import { Button, Form } from "react-bootstrap";
export default function Forms(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      return (
         
        <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Form.Label>First name</Form.Label>
            <Form.Control
           
            placeholder="Enter your first name"
            {...register("firstName", {
              required: "Please enter your first name",
            })}
          />
           <Form.Label>Last name</Form.Label>
            <Form.Control
           
            placeholder="Enter your last name"
            {...register("lastName", {
              required: "Please enter your last name",
            })}
          />
            <Form.Label>Age</Form.Label>
            <Form.Control
            type="number"
            placeholder="Enter your age"
            {...register("age", {
              required: "Please enter your age",
              pattern: {
                value: /\d+/,
                message: "Please enter a valid email"
              }
            })}
          />
          {/* <input{...register('email',{required:true, pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})}/><br/><br/>
          {errors.email && <p>Please enter email correctly.</p>} */}
             <Form.Label>Email</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email"
              }
            })}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Please enter your password",
              pattern: {
                value: /\d+/,
                message: "Please enter a valid password"
              }
            })}
          />
          <Form.Label>Select Gender</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            value="male"
            {...register("gender", {
              required: "Please select your gender"
            })}
          />
          <Form.Check
            type="radio"
            label="Female"
            value="female"
            {...register("gender")}
          />
          <input type="submit" />
        </form>
      );
}