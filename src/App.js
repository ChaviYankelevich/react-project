import react, { useRef, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Login from './Components/Login';
// import List from './Components/List';
// import { BrowserRouter } from 'react-router-dom'
import Page from './Components/Page';
import Routing from './Components/Routing';
import UserContext from './Components/UserContext';


function App() {
  // const [isLogIn,setIsLogIn]=useState(false);
  // const [userName,setUserName]=useState('');
  

  
  return (

     <div>
      
       {/* <BrowserRouter> */}
     
      {/* { isLogIn?/* <BrowserRouter> */}
    {/* //  <UserContext>
    //    <Login/>
    //  <Page/>
      
    //   </UserContext> */}
  {/* </BrowserRouter> */}
     {/* <Login></Login> */ }
  {/* <Routing userName={userName}/> */}
   {/* :
  
    // <Login setIsLogIn={setIsLogIn} setUserName={setUserName}/>}
    //  </BrowserRouter> */}
   <Form></Form>
     </div>
  );
}

export default App;
