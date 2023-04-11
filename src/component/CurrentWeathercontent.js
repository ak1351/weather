import React from 'react'
import { useState, useEffect } from 'react';
import logo from '../assets/thundar.jpg'
import ReactAnimatedWeather from 'react-animated-weather';
import { Typography } from '@mui/material';
export default function CurrentWeathercontent() {
    const url = (latitude, longitude) =>
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover_low,visibility,windspeed_10m,winddirection_10m,windgusts_10m,soil_temperature_6cm,soil_moisture_1_3cm&current_weather=true&forecast_days=1`;
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState('')
    const [windDirection, setwindDirection] = useState(null);
    const [temp, settemp] = useState(null);
    const [windspeed, setWindSpeed] = useState(null);
    const [CurrentWeatherData, setCurrentWeatherData] = useState('')

    useEffect(() => {
        const getDataAfterTimeout = setTimeout(() => {

            CurrentWeather();
        }, 1100)
        return () => clearTimeout(getDataAfterTimeout);
    })

    const CurrentWeather = () => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            return "Geolocation is not supported by this browser.";
        }


        function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLatitude(latitude);
            setLongitude(longitude)

            console.log("latitude", latitude);
            console.log("longitude", longitude)
        }



        fetch(
            url(latitude, longitude)
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("API response:", data);

                console.log("Current weather:", data.current_weather);

                const currentTemperature = data.current_weather.temperature;
                const currentwindirection = data.current_weather.winddirection;
                const currentwindSpeed = data.current_weather.windspeed;
                console.log("Current temperature:", currentTemperature);
                setCurrentWeatherData(data)
                setwindDirection(currentwindirection);
                setWindSpeed(currentwindSpeed);
                settemp(currentTemperature);
            })
        //   .catch((error) => {
        //     console.error("API error:", error);
        //     console.error("Weather data not available");
        //   });
    }

    const cloudIcon = {
        icon: 'PARTLY_CLOUDY_DAY',
        color: '#ffeb3b',
        size: 78,
        animate: true
    }; const sunny = {
        icon: "CLEAR_DAY",
        color: "#ffeb3b",
        size: 48,
        animate: true
    };

    const partialSunny = (
        <ReactAnimatedWeather
            icon={cloudIcon.icon}
            color={cloudIcon.color}
            size={cloudIcon.size}
            animate={cloudIcon.animate}
        />
    );

    const fullSunny = (
        <ReactAnimatedWeather
            icon={sunny.icon}
            color={sunny.color}
            size={sunny.size}
            animate={sunny.animate}
        />
    );




    //icon condition

    const getWeatherIcon = (temperature) => {
        let icon = "";
        if (temperature >= 25) {
            icon = partialSunny;
        } else {
            icon = fullSunny;
        }
        return icon;
    };


    const currentTemperature = temp;
    const icon = getWeatherIcon(currentTemperature);







    return (
        <div style={{
            backgroundImage: `url(${logo})`, backgroundSize: "cover", height: "80vh", color: "#f5f5f5",
            minWidth: "200px", maxWidth: "1440px", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
            {CurrentWeatherData && (

                <div style={{ display: "flex", flexDirection: "column" }}>

                    <div>
                        <Typography sx={{ textDecoration: "underline", marginLeft: "-70px" }} variant='h3'> CurrentWeather </Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "50px" }} >


                        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>

                            <h1> Temperature:{temp} °C</h1>
                            {icon}
                        </div>
                        <div>

                            <h1> windspeed : {windspeed} km/h</h1>
                        </div>
                        <div>

                            <h1> windDirection : {windDirection} °</h1>
                        </div>
                    </div>

                </div>
            )

            }





        </div>
    )
}
