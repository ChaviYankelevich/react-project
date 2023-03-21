import React, { useEffect, useRef, useState,useContext } from 'react';
import axios from 'axios';
import { useSelector,useDispatch  } from 'react-redux';


export default function Contributions() {
    const dispatch=useDispatch()
const contributions=useSelector(state=>state.contributions)
    // const [,setContributions]=useState([])
    const director="chavi";
    // useEffect(() => {
    //     axios.get('/contribution.json')
    //     .then(data=>
    //         {
    //             console.log(data,"data")
    //             setContributions(data.data);
    //             console.log(contributions);
    //         }).catch(error=>{console.log(error)})
    // },[])

    return (
       contributions&& <div className='container'>   
        {
            
            contributions.map((con, index) =>          
                <div key={index} className="divi"> 
         <p>{con.Date} תאריך תרומה</p>
         <p>{con.Contributor} תורם</p>
         <p>{con.Type} סוג התרומה</p>
         <p>{con.Sum} סכום התרומה</p>
                </div>      
            )
        }
 </div>
    )
}