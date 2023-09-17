import React from "react";
import "./search.css";
import { Box, Grid, styled } from "@mui/material";
let Search = () => {

  let MainBox=styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    [theme.breakpoints.down("md")]:{
      display:"flex",
      flexDirection:"column",
      textAlign:"center",
    alignItems:"center",
    justifyContent:"space-between",
    margin:0
    }
  }))
  let SubGrid=styled(Grid)(({theme})=>({
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
    }
  }))
  let SubBox1=styled(Box)(({theme})=>({
    marginRight:"6%",
    marginTop:"0.5%",
    [theme.breakpoints.down("md")]:{
    marginTop:"5%",
    marginLeft:"-10%",



    }
  }))
  let SubBox2=styled(Box)(({theme})=>({
    // marginLeft:"10%",
    marginTop:"-15%",
    marginLeft:"-250%",
    // position:"absolute",
    // zIndex:20,
    [theme.breakpoints.down("md")]:{
    marginLeft:"1%",


    }
  }))
  let SubBox3=styled(Box)(({theme})=>({
    // marginLeft:"10%",
    // marginTop:"-15%",
    // marginLeft:"-250%",
    // position:"absolute",
    // zIndex:20,
    [theme.breakpoints.down("md")]:{
    marginLeft:"-50%",
    marginTop:"-5%",


    }
  }))
  return (
    <MainBox >
      <SubBox3 sx={{display:"flex"}}>
      <img 
        id="icon"
        src="https://www.redbuyers.com/assets/home_page/img/map-pin.png"
        alt=""
      />
      <SubBox2>

      <input type="text" id="inp" placeholder="Where’s your house?"   />
      </SubBox2>
      </SubBox3>
      <SubBox1>

      <button id="serachbtn" >Get my free offer</button>
      </SubBox1>
     
    </MainBox>
  );
};
export default Search;
