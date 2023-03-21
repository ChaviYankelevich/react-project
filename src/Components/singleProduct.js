import React,{Component,useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector,useDispatch  } from 'react-redux';


export default function SingleProduct(){
    const params=useParams();
    const dispatch=useDispatch()
const products=useSelector(state=>state.products)
    // console.log(params.index)
    const [product, setProduct] = useState(null);
    // let arr=[...products];
 useEffect(() => {
    // axios.get(`http://localhost:3000/data.json`)
    // .then(data=>
    //     {
    //         
    //     }).catch(error=>{console.log(error)})
setProduct(products[params.index]);
},[])
useEffect(() => {
    console.log(product,"product");
  }, [product]);
  console.log(process.env.PUBLIC_URL)
 
    return (
        <div className="parent">
           
             <img src="../Pictures/כרטיס-1.jpg" className="chaild"/>
           {product&& <div className="chaild">
                    <h3>{product.name}  שם</h3>                     
                    <img src={product.img}/> 
                    <p>{product.data}</p>
                </div> 
                 }    
        </div>
    )
}