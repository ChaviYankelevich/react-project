import React,{useState} from 'react';
import List from './List';
import Forms from './Form';
import SingleProduct from './singleProduct';
import {Link, Route, Routes} from 'react-router-dom';
import UserDetails from './userDetails';
import { useSelector } from 'react-redux';
import Contributions from './contributions';

export default function Routing()
{
    const user=useSelector(state=>state.loginUser)
    const [showImage, setShowImage] = useState(false);
    const handleLinkClick = () => {
      setShowImage(true);
    };
    return(

<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" className='nav'>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
                <Link class="nav-link active" to='/details' onClick={handleLinkClick}>הכנס פרטים</Link>

        </li>
        <li class="nav-item">
        <Link class="nav-link active" to='/list' onClick={handleLinkClick}>רשימת מוצרים</Link><br/>

        </li>
        <li class="nav-item">
<Link class="nav-link active" to='/form' onClick={handleLinkClick}>תרומה</Link>
       

        </li>
        
{user.userName=="chavi"?
 <li class="nav-item">
<Link class="nav-link active" to='/con' onClick={handleLinkClick}>צפיה בתרומות</Link>
</li>:
        <li class="nav-item">
<Link class="nav-link disabled" to='/con' onClick={handleLinkClick}>צפיה בתרומות</Link>
         
        </li>}
      </ul>
    </div>
  </div>
</nav>
{!showImage && (
        <img src="../Pictures/1 (1).jpg" className='startImg'/>
      )}
  <Routes>
           
            <Route path='form' element={<Forms/>}/>
            <Route path='/single/:index'  element={<SingleProduct/>}/>
         <Route path='/details' element={<UserDetails/>}/>
         <Route path='list' element={<List/>}/>
         <Route path='con' element={<Contributions/>}/>

            </Routes>
</div>
    );
}