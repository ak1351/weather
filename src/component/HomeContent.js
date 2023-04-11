import React from 'react'
import logo from '../assets/weather.jpg'
import { useState } from 'react';
import { Button, Typography, TextField, Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';

import ReactAnimatedWeather from 'react-animated-weather';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function HomeContent() {

  const cloudIcon = {
    icon: 'PARTLY_CLOUDY_DAY',
    color: '#ffeb3b',
    size: 78,
    animate: true
  };

  const url = (latitude, longitude) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover_low,visibility,windspeed_10m,winddirection_10m,windgusts_10m,soil_temperature_6cm,soil_moisture_1_3cm&current_weather=true&forecast_days=1`;
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [weatherData, setWeatherdata] = useState("")
  const [loading, setloading] = useState(false)
  const fetchcitySuggestion = async () => {
    // CurrentWeather();

    if (!latitude || !longitude) {
      return;
    }
    try {
      setloading(true)
      const resp = await fetch(url(latitude, longitude));
      const data = await resp.json()


      console.log("hi api ", data)

      setWeatherdata(data)
      console.log("time", weatherData.hourly.time)
      setloading(false)
    }

    catch (error) {
      setloading(false)
      console.error("global error", error)
      // setWeatherdata(null)
    }

  };



  return (
    <Box style={{
      backgroundImage: `url(${logo})`, backgroundSize: "cover", height: "174vh", color: "#f5f5f5",
      minWidth: "200px", maxWidth: "1440px"
    }} >

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", margin: "auto" }} >

          <div>

            <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "30px", marginLeft: "30px", marginBottom: "20px" }}>


              <div style={{ display: "flex", margin: "auto" }}> <ReactAnimatedWeather
                icon={cloudIcon.icon}
                color={cloudIcon.color}
                size={cloudIcon.size}
                animate={cloudIcon.animate} />
              </div>
              <Typography sx={{ marginBottom: "30px", margin: "auto" }} variant='h3'>
                weather Api
              </Typography>
              <Typography sx={{ paddingTop: "20px", margin: "auto", paddingBottom: "20px" }}>
                If you want to check wheather you enter the latitude and longitude number .
                You can use it immediately!
              </Typography>

              <div style={{ marginBottom: "25px", gap: "70px", backgroundColor: "whitesmoke", width: "570px", margin: "auto", paddingTop: "5px", paddingBottom: "5px", display: "flex", flexDirection: "row" }}>

                <div >
                  <TextField sx={{ width: '150px' }} id="outlined-basic" label="Enter the latitude" onChange={(e) => setLatitude(e.target.value)} variant="standard" required />
                </div>
                <div>
                  <TextField sx={{ width: '150px' }} id="outlined-basic" label="Enter the longitude" onChange={(e) => setLongitude(e.target.value)} variant="standard" required />

                </div>
                <div>
                  <Button onClick={fetchcitySuggestion} variant="contained" sx={{ marginLeft: "5px", marginTop: "6px" }}> {loading ? <>Loading..</> : <>Search</>}</Button>
                </div>
              </div>
            </div>



            {weatherData && (
              <div style={{ paddingBottom: "20px", display: "flex", gap: "100px", flexDirection: "row", marginTop: "50px", marginBottom: "20px", paddingLeft: "20px", minWidth: "500px" }}>

                <div>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography> windspeed_10m </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>

                        {weatherData.hourly.windspeed_10m.map((x, index) => (<div key={index} >{x} m/s</div>))}

                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                </div>

                {/* <div>
               
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Soil_moisture_1_3cm </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {weatherData.hourly.soil_moisture_1_3cm.map((x, index) => (<div key={index} >{x} %</div>))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                
                </div> */}

                <div>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography> Date-and-Time </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {weatherData.hourly.time.map((x, index) => (<div key={index} >{x}</div>))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                </div>


                <div>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography> Temperature_2m</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {weatherData.hourly.temperature_2m.map((x, index) => (<div key={index} >{x} °C</div>))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                </div>

                {/* <div>
         
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography> Soil_temperature_6cm</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {weatherData.hourly.soil_temperature_6cm.map((x, index) => (<div key={index} >{x} °C</div>))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  
                </div> */}

                <div>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Showers </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {weatherData.hourly.showers.map((x, index) => (<div key={index} >{x} mm</div>))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                </div>

              </div>
            )}




            {/* <CurrentWeatherContent latitude={latitude}   longitude={longitude}/> */}


          </div>








        </div>


      </Box>
    </Box>
  )
}

