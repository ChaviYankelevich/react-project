import React from 'react';
//import Home from './Home';
import List from './List';
import Page from './Page';
import {Link, Route, Routes} from 'react-router-dom';
export default function Routing(props)
{
    const userName=props.userName;
    console.log(userName,'r')
    return(
        <div>
       {/* <Link to='/list'>List</Link><br/>
    <Link to='/page'>Page</Link>
            
        <Routes>
         <Route path='/' element={<Home/>}/> 
        <Route path='/list' element={<List/>}/>
        <Route path='/page' element={<Page userName/>} />
        </Routes>

        <div>
            { <Link to='/'>Home</Link> }
        </div> */}
    </div>
    );
}