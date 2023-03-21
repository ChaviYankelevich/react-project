import React, {useContext ,useState,useEffect } from 'react';
import List from "./List"
// import {userContext }from './UserContext';
import { fromEvent } from 'rxjs';
// import {dataService} from './service';
import  Forms from './Form';
import {Link, Route, Routes} from 'react-router-dom';
import Routing from './Routing';
import { useSelector, useDispatch } from "react-redux"
import { setIsLogin, setPassword, setState, setUserName } from './actions';
import Swal from 'sweetalert2'

export default function Page(props)
{
    const dispatch = useDispatch()
    const user=useSelector(state=>state.loginUser)
    const clicks=()=>{
          Swal.fire({
            title: 'האם אתה בטוח?',
            text: 'במידה ותבחר להתנתק הנתונים שלך ימחקו ללא אפשרות שחזור!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'כן אני מעוניין לצאת!',
            cancelButtonText: 'לא אני נשאר',
            confirmButtonColor: "#FFC107", // set the confirm button color
  cancelButtonColor: "#d33"
          }).then((result) => {
            if (result.isConfirmed) {
      dispatch(setState({isLogin:false,userName:"",password:""}))            
            } 
            
          })
        
      
       
      
      
       }
      //  useEffect(() => {
      //   console.log(user,"user");
      // },[user] );
return(
<>
{user&& user.isLogin==true && (
       <div>
        <h4 className='hello'>{user.userName} שלום </h4>

<br/>
<Routing/>
<br/>
<br/>
<div className='wrap'>
<button onClick={clicks} className="btn btn-warning" >יציאה</button></div>
</div>
      )}
</>)
}