import React from 'react'
import "./downmid.css"
import Star from "../../assets/Star.png"
import { Box, styled } from '@mui/material'
let MainBox=styled(Box)(({theme})=>({
  // display:"flex",
  marginTop:"5%",
  [theme.breakpoints.down("md")]:{
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
  // backgroundColor:"red",
  marginTop:"180%",
  marginLeft:"40%",
  },  [theme.breakpoints.between(374,376)]:{
    marginTop:"250%"
  },
  [theme.breakpoints.between(359,361)]:{
    marginTop:"220%",
    marginLeft:"40%"
  },
}))

export const Downmid = () => {
  return (
    <section id='downmid'>
        <article>
            <MainBox id='info'>
                <img src={Star} alt="" />
                <span>Don’t take our word for it.</span>
                <span>Take theirs...</span>
                <span>Listen to what our customers have to say.</span>
            </MainBox>
        </article>
    </section>
  )
}
