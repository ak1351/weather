import React from 'react'
// import { WiDaySunny } from 'weather-icons-react';
import ReactAnimatedWeather from 'react-animated-weather';
import {Box,Button, Typography }from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';
import {Link
} from "react-router-dom";
export default function Header() {
   
const wheatherIcon = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 35,
  animate: true
};
  return (
    <Box sx={{ height:"10vh" ,flexGrow:1,backgroundColor:"white" }}>
    <Grid container spacing={2}>
     
      <Grid  spacing={2} sx={{display:"flex",flexDirection:"row"}} xs={5}>
      <ReactAnimatedWeather
    icon={wheatherIcon.icon}
    color={wheatherIcon.color}
    size={wheatherIcon.size}
    animate={wheatherIcon.animate}
  />
      {/* <WiDaySunny  size={37} color='#f9a825' /> */}
       < Typography  variant='h5' sx={{marginLeft:"40px" ,color:"black"}}>wheather Api</Typography> 
      </Grid>
      <Grid xs={3}>
      <Button> <Link to="/"  style={{textDecoration: "none"}}> Home </Link></Button>
      </Grid>
      <Grid sx={{textDecoration: "none"}} xs={3} >
     <Button >  <Link to="/Aboutus" style={{textDecoration: "none"}} >About us </Link></Button>
      </Grid>
    </Grid>
  </Box>
  )
}
