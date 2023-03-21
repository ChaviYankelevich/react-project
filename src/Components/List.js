import React, { useEffect, useRef, useState,useContext } from 'react';
import axios from 'axios';
import SingleProduct from './singleProduct';
import './styleSheets/style.css';
import {Link, Route, Routes} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Form } from "react-bootstrap";
import { useSelector,useDispatch  } from 'react-redux';
import { setProduct } from './actions';


export default function List() {
const dispatch=useDispatch()
const products=useSelector(state=>state.products)
const director="chavi";
const user=useSelector(state=>state.loginUser)
    //  const [products, setProducts] = useState([]);
     const [addProduct,setAddProduct]=useState(false)
   let arr=[...products];
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    
const clicks=()=>{
 setAddProduct(true)
 
}
const onSubmit=async (dataForm)=>{
    const newValue = {
        name: dataForm.name,
        img: dataForm.img,
        data:dataForm.data
      };
    // console.log(dataForm)
    // products.push(newValue)
   dispatch(setProduct(newValue))
    // console.log(products)
    setAddProduct(false)
}
    return (
      <div>
        <div className='container'>   
        {
            
            arr.map((x, index) => 
          
                <div key={index} className="divi">
                
                    <Link className='LINK' to={`/single/${index}`}>
                      
                    <img src={x.img} className="image"/> 
                    <p className='name'>{x.name}</p>
</Link>
                </div>      

            )
        }
        </div>
        <br/>
        <br/>
    {user.userName==director&& <button onClick={clicks} className="btn btn-warning">הוסף מוצר</button>}
        
      {addProduct==true&& <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Label>שם מוצר</Form.Label>
                      <Form.Control className='form'
                     
                    //   placeholder="Enter your name"
                      {...register("name", {
                        required: "הכנס שם",
                      })}
                    />                 
                      <Form.Label>תמונה</Form.Label>
                      <Form.Control className='form'
                     
                    //   placeholder="Enter your name"
                      {...register("img", {
                        required: "הכנס תמונה",
                      })}
                    />
                     <Form.Label>מידע</Form.Label>
                      <Form.Control className='form'
                     
                    //   placeholder="Enter your name"
                      {...register("data", {
                        required:"הכנס מידע",
                      })}
                    />
                     <input type="submit" />
            </form>}
       
      </div>


    )
}