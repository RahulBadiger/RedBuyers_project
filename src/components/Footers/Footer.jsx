import React from 'react'
import "./footer.css"
import { Box, Grid, styled } from '@mui/material';

let MainGrid=styled(Grid)(({theme})=>({
    marginTop:"10%",
    [theme.breakpoints.down("md")]:{
        marginTop:"25%",
        
        // display:"flex",
        // flexDirection:"row"
    },
    [theme.breakpoints.between(374,376)]:{
        marginTop:"-20%",
        marginLeft:"20%"
     
      }, 
      [theme.breakpoints.between(413,415)]:{
        marginTop:"-60%",
        marginLeft:"15%"
      },
      [theme.breakpoints.between(389,391)]:{
        marginTop:"-60%",
        marginLeft:"15%"
      },
      [theme.breakpoints.between(359,361)]:{
        marginTop:"-60%",
        marginLeft:"15%"
      },
      [theme.breakpoints.between(411,413)]:{
        marginTop:"-60%",
        marginLeft:"15%"
      },
      [theme.breakpoints.between(392,394)]:{
        // marginTop:"140%",
        marginLeft:"15%"
      },
}))

let Footer =()=>{
    return(
        <section id='foot'>
            <article>
                <MainGrid container spacing={2}>
                    <Grid item xs={6} md={2.5}>
                    <Box id='a1'>
                        <span>BUY & SELL</span>
                        <li>Sell</li>
                        <li>Browse Home</li>
                        <li>Cash Offer</li>
                        <li>Buy</li>
                        <li>New Construction</li>
                        <li>Pricing</li>
                        <li>Down Payment</li>
                    </Box>  
                    </Grid>
                    <Grid item xs={6} md={2.5}>
                    <Box id='a2'>
                        <span>INVESTMENT</span>
                        <li>Co-Investment</li>
                        <li>Patnership Buying</li>
                    </Box> 
                    </Grid>
                    <Grid item xs={6} md={2.5}>
                    <Box id='a3'>
                        <span>COMPANY</span>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Vendors</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </Box>
                    </Grid>
                    <Grid item xs={6} md={2.5}>
                    <Box id='a4'>
                        <span>LEARN</span>
                        <li>Seller FAQs</li>
                        <li>Buyer FAQss</li>
                        <li>Blogs</li>
                        <li>Mortgage Calculator</li>
                    </Box>
                    </Grid>
                    <Grid item xs={6} md={2}>
                    <Box id='a5'>
                        <span>LOCATIONS</span>
                        <li>Greater Toronto Area</li>
                        <li>Region of Peel</li>
                        <li>Region of Hamilton</li>
                        <li>Region of Waterloo</li>
                        <li>View All Locations</li>
                        <input value="Map Search" type="button" id='btn' />
                    </Box>
                    </Grid>
                </MainGrid>
                {/* <Box id='up'>
                    
                 
                  
                  
                  
                </Box><br /> <br /> */}
                <Box id='line' sx={{mt:"3%"}}></Box>
            </article>
        </section>
    )
}
export default Footer;