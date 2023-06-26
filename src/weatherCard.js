import React, { useState, useEffect } from 'react'
// import clouds from './img/clouds.png';
// import haze from './img/haze.png';
// import fog from './img/fog.png';
// import mist from './img/mist.png';
// import rain from './img/rain.png';
// import thunderstorm from './img/thunderstorm.png';
// import clear from './img/clear.png';
import humidity_img from './img/humidity_img.png';
import pressure_img from './img/pressure_img.png';
import wind_img from './img/wind_img.png';

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("vsfvBNr/clouds");
          break;
        case "Haze":
          setWeatherState("ZxKNM7Q/haze");
          break;
        case "Fog":
          setWeatherState("5GLh6tW/fog");
          break;
        case "Mist":
          setWeatherState("CPT7kvM/mist");
          break;
        case "Rain":
          setWeatherState("vYLYWdV/rain");
          break;
        case "Thunderstorm":
          setWeatherState("DQy8Tvc/thunderstorm");
          break;
        case "Snow":
          setWeatherState("vs4wWjs/snow.png");
          break;
        default:
          setWeatherState("YdYL9Rh/clear");
      }
    }
  }, [weathermood]);

  return (
    <>
      <section className="temp_icon_cont">
        <div className="temp_icon">
          <img src={`https://i.ibb.co/${weatherState}.png`} alt="" />
        </div>
      </section>

      <section className="degrees_info_cont">
        <h3 className='degrees' >{(temp - 273.15).toFixed(0)}°C</h3>
        <h5 className="scenario">{weathermood}</h5>
        <h5 className="place">{name},{country}</h5>
      </section>

      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="sineWave" fill="#ffe69c" fillOpacity="0.2" d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0" />
        </defs>
        <use className="wave" href="#sineWave" />
        <use className="wave" x="-100%" href="#sineWave" />
        <use className="wave1" href="#sineWave" />
        <use className="wave1" x="-100%" href="#sineWave" />
        <use className="wave2" href="#sineWave" />
        <use className="wave2" x="-100%" href="#sineWave" />
      </svg>

      <section className="stats">

        <div className="stats_cont">
          <div className="stats_img_cont">
            <img src={humidity_img} alt="" />
          </div>
          <div className="stats_details">
            <h5>{humidity}%</h5>
            <p>Humidity</p>
          </div>
        </div>

        <div className="stats_cont">
          <div className="stats_img_cont">
            <img src={wind_img} alt="" />
          </div>
          <div className="stats_details">
            <h5>{speed}km/hr</h5>
            <p>wind</p>
          </div>
        </div>

        <div className="stats_cont">
          <div className="stats_img_cont">
            <img src={pressure_img} alt="" />
          </div>
          <div className="stats_details">
            <h5>{pressure}mb</h5>
            <p>Pressure</p>
          </div>
        </div>


      </section>

    </>
  )
}

export default WeatherCard
