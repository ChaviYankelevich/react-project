import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// import style from './style'
import Products from './Products';
export default function List1() {
const nameRef=useRef();
const colorRef=useRef();
const priceRef=useRef();
     const [products, setProducts] = useState([]);
         //[
//         { name: 'Chair', price: 100, color: 'brown' ,img: <img src="../ARUB0042.jpg"/> },
//         { name: 'Table', price: 50, color: 'black',img: <img src="../Pictures/ARUB0042.jpg"/> },
//         { name: 'Shoes', price: 555, color: 'white' ,img: <img src="../Pictures/ARUB0042.jpg"/>},
//         { name: 'computer', price: 454, color: 'gray' ,img: <img src="../Pictures/ARUB0042.jpg"/>},
//         { name: 'apple', price: 50, color: 'green',img: <img src="../Pictures/ARUB0042.jpg"/>} ,
//         { name: 'bag', price: 170, color: 'pink' ,img: <img src="../Pictures/ARUB0042.jpg"/>},
//         { name: 'book', price: 10, color: 'orange',img: <img src="../Pictures/ARUB0042.jpg"/> }
//     ]);
   let arr=[...products];
// useEffect(
//     ()=>{
//         //<div class="alert alert-success d-flex align-items-center" role="alert"></div>
//        alert("HELLO")
//     }, []);
    useEffect(() => {
        axios.get('./data.json')
        .then(data=>
            {
                console.log(data);
                setProducts(data.data);
            }).catch(error=>{console.log(error)})
    })
const clicks=()=>{
 
 arr.push({name:nameRef.current.value,price:priceRef.current.value,color:colorRef.current.value,img: <img src="./Pictures/ARUB0042.jpg"/>})
setProducts(arr);

}
    return (
        <div>
<table>
        {
            products.map((x, index) => 
                       
          <tr key={index}>
            <td>{x.name}</td>
         <td>{x.price}</td>
            <td>{x.color}</td>
            <td>{x.img}</td>
         </tr>
            )
        }
        <tr>
            <td><input ref={nameRef}/></td>
            <td><input type="number" ref={priceRef}/></td>
            <td><input type="color" ref={colorRef} /></td>
            
        </tr>
        </table>

       <button onClick={clicks} className="btn btn-warning"></button>
 </div>
    )
}