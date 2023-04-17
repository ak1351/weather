import React from 'react'
// import { WiDaySunny } from 'weather-icons-react';
import ReactAnimatedWeather from 'react-animated-weather';
import { Box, Button, Typography } from '@mui/material';

import { Link } from "react-router-dom";
export default function Header() {

  const wheatherIcon = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 35,
    animate: true
  };
  return (

 
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "secondary.main", minWidth: "200px", maxWidth: "1440px", color: "black" ,padding:"10px"}}>


      <Box sx={{ display: "flex", flexDirection: "row", gap: "40px" }} >

        <Box>
          <ReactAnimatedWeather
            icon={wheatherIcon.icon}
            color={wheatherIcon.color}
            size={wheatherIcon.size}
            animate={wheatherIcon.animate}
          /></Box>

        < Typography variant='h5' >weather Api</Typography>
      </Box>
      <Box>
        <Button sx={{ color: "black" }}> <Link to="/" style={{ textDecoration: "none" }}> Home </Link></Button>
      </Box>

      <Box>
        <Button >  <Link to="/Aboutus" style={{ textDecoration: "none" }} >About us </Link></Button>
      </Box>
      <Box>
        <Button >  <Link to="/Forcastweather" style={{ textDecoration: "none" }} >Forcastweather</Link></Button>
      </Box>

    </Box>
    
  )
}
