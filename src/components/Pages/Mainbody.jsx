import React from "react";
import "./mainbody.css";
import Search from "../Reuse/Search";
import { Box, Grid, Typography, styled } from "@mui/material";

let MainBox=styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"row-reverse",
  [theme.breakpoints.down("md")]:{
    display:"flex",
    flexDirection:"column",
    marginTop:"80%",
    marginLeft:0,
    padding:0
  },
  [theme.breakpoints.between(374,376)]:{
    marginTop:"150%",
    marginLeft:"20%"
 
  },
  [theme.breakpoints.between(413,415)]:{
    // marginTop:"110%",
    marginLeft:"15%"
  },
  [theme.breakpoints.between(389,391)]:{
    marginTop:"125%",
    marginLeft:"15%"
  },
  [theme.breakpoints.between(359,361)]:{
    marginTop:"150%",
    marginLeft:"15%"
  },
  [theme.breakpoints.between(411,413)]:{
    marginTop:"110%",
    marginLeft:"15%"
  },
  [theme.breakpoints.between(392,394)]:{
    marginTop:"120%",
    marginLeft:"15%"
  },
}))
let MainGrid=styled(Grid)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    marginTop:"30%",
    marginLeft:0
  }
}))
let SubTypo=styled(Typography)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    marginTop:"10%",
    marginLeft:0
  }
}))
let SubGrid=styled(Grid)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    marginTop:"10%",
    marginLeft:0
  }
}))
let MainGrid2=styled(Grid)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    marginTop:"-30%",
    marginLeft:0,
  }
}))

let Mainbody = () => {
  return (
    <section id="body">
      <article>
        <MainBox> 
        <MainGrid container sx={{display:"flex",justifyContent:"center",mt:"15%"}}>
            <Grid item xs={12} md={6}>
            
                <img src="https://www.redbuyers.com/assets/home_page/img/Hero.png" style={{height:"550px",width:"550px"}}  alt="" />
            </Grid>

          </MainGrid>
        <MainGrid2 container sx={{ }}> 
          <Grid item xs={12} md={12}>
            <Typography id="typo1" sx={{textAlign:"center",mt:"40%"}}>
              Get an Instant offer  and sell your home
            </Typography>
          </Grid>
          <SubGrid item xs={12} md={12} id="typo2">
            <Search />
          </SubGrid>
          <Grid item xs={12} md={12} sx={{textAlign:"center"}}>
            <SubTypo id="typo3" sx={{mb:"25%"}}>
              Receive an offer within 24 hours, it’s that simple!
            </SubTypo>
          </Grid>
        </MainGrid2>

        
        </MainBox>

      </article>
    </section>
  );
};

export default Mainbody;
