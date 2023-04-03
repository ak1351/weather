import React from 'react'
import { Box } from '@mui/material'
import logo from '../assets/sky.png'
export default function AboutusContent() {
  return (

    <Box sx={{ backgroundImage: `url(${logo})`, backgroundSize: "cover", height: "90vh", color: "#f5f5f5", flexDirection: "column", display: "flex", minWidth: "200px", maxWidth: "1440px" }}>


      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>weather Api</h3>
        <p>A weather API is an Application Programming Interface that allows weather data to be queried from scripts and code.\n Good weather APIs provide both historical weather data and forecast data via an easy-to-use, well-defined programming interface.\nThe best APIs have dozens of weather measures, near-real-time current conditions reporting, and decades of worldwide historical weather reports</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>why use weather Api</h3>
        <p>A weather API is ideally suited for use cases that need large volumes of weather data or need to access weather data in an automated way.\n For example, if you want to make a script that loads weather data into a corporate data warehouse to match against historical sales metrics, using a weather API in your ETL script is the perfect solution.\n If you are creating an app that needs to combine user activity and weather conditions at the time of that activity, a weather API allows you to retrieve that exact weather conditions at any given time and location directly in your code.</p>
      </div>
    </Box>

  )
}
