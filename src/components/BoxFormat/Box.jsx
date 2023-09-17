import React from "react";
import "./box.css"
import { Grid, Typography, styled } from "@mui/material";
import BoxSearch from "../Reuse/BoxSearch";

let MainGrid = styled(Grid)(({ theme }) => ({
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop:"10%",
    [theme.breakpoints.down("md")]: {
        marginTop:"80%"

    },
    [theme.breakpoints.between(374,376)]:{
        marginTop:"80%",
        marginLeft:"20%"
     
      },
      [theme.breakpoints.between(413,415)]:{
        marginTop:"10%",
        marginLeft:"15%"
      },
      [theme.breakpoints.between(389,391)]:{
        // marginTop:"-60%",
        marginLeft:"15%"
      },
      [theme.breakpoints.between(359,361)]:{
        marginTop:"60%",
        marginLeft:"30%"
      },
      [theme.breakpoints.between(411,413)]:{
        marginTop:"10%",
        marginLeft:"15%"
      },
      [theme.breakpoints.between(392,394)]:{
        // marginTop:"140%",
        marginLeft:"15%"
      },
  }));

let Box =()=>{
    return(
        <section id="box">
            <article>
                <MainGrid container  spacing={1} >
                    <Grid item xs={12} md={12}>
                    <Typography id='bet1'>Enter you home details and</Typography>

                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Typography id='bet2'>Get an instant offer.</Typography>

                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Typography id='bet3'>Within 24 hours!</Typography>

                    </Grid>
                    <Grid item xs={12} md={12}>
                    <BoxSearch/>

                    </Grid>
                </MainGrid>
                {/* <div id="betbox">
                    <br />
                    <Typography>
                    </Typography>
                </div> */}
            </article>
        </section>
    )
}
export default Box;