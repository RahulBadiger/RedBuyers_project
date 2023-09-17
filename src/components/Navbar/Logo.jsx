// import React from 'react'
// import Menu from '../../assets/Menu Icon.png'
// import RB from '../../assets/RedBuyers.png'
// import './Logo.css'

// const Logo = () => {
//   return (
//    <>
//    <div>
//     <img src={Menu} alt="" id='ham'/>
//    <img src={RB} width="109px" height="35px" alt='menu-icon' max-height= "50px"/>
//    </div>
//    </> 
//   )
// }

// export default Logo

import React, { useState } from 'react';
import MenuIcon from '../../assets/Menu Icon.png';
import CloseIcon from "../../assets/iconamoon_close.png"
import RB from '../../assets/RedBuyers.png';
import './Logo.css';
import { Box, styled } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


let MainBox=styled(Box)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    display:"flex",
    flexDirection:"row",
  justifyContent:"center",
  marginTop:"-10%",
  }
}))

const Logo = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <MainBox id="Logo" >
        <Box>

        <img src={menuOpen ? CloseIcon : MenuIcon} alt="" id="ham" onClick={menuOpen ? closeMenu : toggleMenu} />
        </Box>
        <Box sx={{mt:"-5%"}}>

        <img src={RB} width="109px" height="35px" alt="menu-icon" max-height="50px" />
        </Box>
      </MainBox>
      {menuOpen && (
        <div className="menu" style={{marginLeft:"30%",marginTop:"20%"}}>
          <div className='menuIconClose'>
            <h1>Menu</h1>
          <img src={CloseIcon}  alt=""  id='closeIcon' onClick={closeMenu}/>
          </div>
          <ul>
            <h5 style={{marginTop:"15%"}}>BUY & SELL</h5>
            <li>Sell</li>
            <li>Browse Home</li>
            <li>Buy</li>
            <li>Down Payment</li>
            <h5 style={{marginTop:"15%"}}>COMPANY</h5>
            <li>About</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <h5 style={{marginTop:"15%"}}>LOCATION</h5>
            <li>Greater Toronto Area</li>
            <li>Region of Peel</li>
            <li>Region of Hamilton</li>
            <li>Region of Waterloo</li>
            <li id='map'>View All Locations</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Logo;
