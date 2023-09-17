import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Center from './Center'
import { Grid, styled } from '@mui/material'

let MainGridContainer=styled(Grid)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    display:"flex",
    marginTop:"10%"
  }
}))
let SubGrid=styled(Grid)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    display:"none",
  }
}))


const Nav = () => {
  return (
    <section id='main'>
      <article>
        <MainGridContainer container>
          <Grid item xs={12} md={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
          <Logo />

          </Grid>
          <SubGrid item xs={12} md={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Center />

          </SubGrid>
          <SubGrid item xs={12} md={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Menu/>

          </SubGrid>

        </MainGridContainer>
      </article>
    </section>
  )
}

export default Nav