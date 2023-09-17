import React from "react";
import "./lastfooter.css";
import Fb from "../../assets/facebook.jpg";
import Tw from "../../assets/twitter.png";
import Lkn from "../../assets/linkedin.png";
import Insta from "../../assets/instagram.png";
import Phone from "../../assets/phone.png";
import Email from "../../assets/Email.png";
import { Box, Grid, Typography, styled } from "@mui/material";

let MainGrid=styled(Grid)(({theme})=>({
  marginTop:"10%",
  [theme.breakpoints.down("md")]:{
      marginTop:"110%",
      
      // display:"flex",
      // flexDirection:"row"
  },
  [theme.breakpoints.between(374,376)]:{
    marginTop:"140%",
    marginLeft:"20%",
 marginBottom:"10%"
  },
  [theme.breakpoints.between(359,361)]:{
    marginTop:"140%",
    marginLeft:"15%"
  },
  [theme.breakpoints.between(413,415)]:{
    // marginTop:"140%",
    marginLeft:"15%"
  },
  [theme.breakpoints.between(389,391)]:{
    // marginTop:"140%",
    marginLeft:"15%"
  },
  [theme.breakpoints.between(411,413)]:{
    // marginTop:"140%",
    marginLeft:"15%"
  },
  [theme.breakpoints.between(392,394)]:{
    // marginTop:"140%",
    marginLeft:"15%"
  },
}))

let Lastfooter = () => {
  return (
    <section id="downfooter">
      <article>
        <MainGrid container spacing={1}>
          <Grid item xs={12} md={12}>
            <p id='foot1'>CONTACT US</p>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box id="pic">
              <img src={Fb} alt="" />
              <img src={Tw} alt="" />
              <img src={Lkn} alt="" />
              <img src={Insta} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{display:"flex",justifyContent:"start",alignItems:"center",gap:"15px"}}>
              <img src={Phone} alt="" /> 
            <Typography id="foot3" >
              905-567-0200
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} sx={{display:"flex",justifyContent:"start",alignItems:"center",gap:"15px"}}>
              <img src={Email} alt="" /> 
            <Typography id="foot4">
              info@redbuyers.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography id="foot5">© 2021 redbuyers.com. All rights reserved.</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography id="foot6">
              RedBuyers Realty. Brokerage, is fully registered under the Real
              Estate and Business brokerage, Act, 2002 of Ontario.
            </Typography>
          </Grid>
        </MainGrid>
      </article>
    </section>
  );
};
export default Lastfooter;
