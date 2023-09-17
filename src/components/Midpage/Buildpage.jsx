import React from "react";
import "./buildpage.css";
import Midhome from "../../assets/midHome.png";
import Steps from "../../assets/Steps.png";
import { Grid, Typography, styled } from "@mui/material";

let MainGrid=styled(Grid)(({theme})=>({
  marginTop:"10%",
[theme.breakpoints.down("md")]:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  marginTop:"30%",
  textAlign:"center"

},
[theme.breakpoints.between(374,376)]:{
  marginTop:"110%",
  marginLeft:"20%"

},
[theme.breakpoints.between(359,361)]:{
  marginTop:"100%",
  marginLeft:"15%"
},
}))
let SUbGrid=styled(Grid)(({theme})=>({
  // marginTop:"10%",
[theme.breakpoints.down("md")]:{
  // display:"flex",
  // flexDirection:"column",
  // justifyContent:"center",
  // alignItems:"center",
  marginLeft:"50%",
  marginTop:"10%",
  // textAlign:"center"

}
}))

let Buildpage = () => {
  return (
    <section id="buildpage">
      <article>
        <MainGrid container  >
          <SUbGrid item xs={12} md={10} sx={{textAlign:"center"}}>
            <Typography variant="span" id='build1'>Let’s See How it Works</Typography> <br />
            <Typography variant="span" id="build2">Here’s how we make it easier to sell your home</Typography>
          </SUbGrid>
          <Grid item xs={12} md={2} sx={{display:"flex",justifyContent:"end"}}>
            <img id="build3"
              src="https://www.redbuyers.com/assets/home_page/img/House.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{}} >
            <img src={Midhome} style={{height:"500px"}} alt="" />
          </Grid>
          <SUbGrid item xs={12} md={6}  sx={{}} >
            <img src={Steps} style={{height:"400px",width:"350px"}} alt="" />
          </SUbGrid>
        </MainGrid>
      </article>
    </section>
  );
};
export default Buildpage;
