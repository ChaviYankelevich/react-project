import react, { useContext, useRef, useState } from 'react';
import Page from './Page';
import userContext from './UserContext';
export default function Login()
{
  const userCts=useContext(userContext);
  const setIsLogIn= userCts.setIsLogIn
  const setUserName=  userCts.setUserName;
const nameref=useRef();
   
const passwordref=useRef();


    function getstart()
    {
         nameref.current.value&&
    passwordref.current.value
    &&setIsLogIn(true)&&setUserName(nameref.current.value)

    }
   
return(
<div>
{
// !isLogIn?
<>
<input type="text" placeholder="name" ref={nameref}></input>
<input type="password" placeholder="password" ref={passwordref}></input>
<input type="button" value="OK" onClick={getstart}/>
</>

// :
// <Page name={nameref.current.value} password={passwordref.current.value}></Page>
}
 </div>
)
}