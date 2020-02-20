import React, { useState, useEffect} from 'react';

const WeatherComp = () => {

    const [weather, setWeather] = useState({});
    

useEffect(() =>

  fetch('http://api.weatherapi.com/v1/current.json?key=<03f46b8758eb46f2acb41205202002>&q=London')
    .then(res => res.json())
    .then(setWeather), []
)


  return (
            <div>
            <p> </p>

            </div>
 
        )
  }


export default WeatherComp