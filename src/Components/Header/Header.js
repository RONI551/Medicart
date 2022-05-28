import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import '../../App.css'
import { Button } from '@mui/material';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
 import img  from '../../images/medicart carousel image/medicare-logo.png'

const Header = () => {
    const [showLinks, setShowLinks] =useState(true)
    return (
   
       <div className='navbar'>
       
       <div className="leftside">
       <button onClick={() =>setShowLinks(!showLinks)}><ReorderSharpIcon/></button>
       <div><img style={{ width:"170px" }} src={img} alt="" /></div>
       <div className='links' id={showLinks? 'hidden':''}>
       <Link className='anchor' to='/home'>Home</Link>
       <Link className='anchor' to='/service'>Service</Link>
       <Link className='anchor' to='/About'>About</Link>
       <Link className='anchor' to='/contact'>Contact</Link>
       <Link to="/login" className='anchor'>login</Link>
       <Link className='anchor' to='/Registration'>Register</Link>
       </div>
       
       </div>
       <div className="rightside">
       <input type="text" placeholder='Search...' />
      
     
     <SearchIcon style={{margin:'0' ,padding:'0', color:'white'}}></SearchIcon>
     <Button className='search-btn'>Search</Button>
       </div>

       </div>
    );
};

export default Header;