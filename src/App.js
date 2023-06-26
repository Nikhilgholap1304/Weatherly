import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './weatherCard';

const App = () => {
  const [searchValue, setSearchValue] = useState('pune');
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=0d97023ce7d5aacb20bc751d1ef9547e`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country
      };

      setTempInfo(myNewWeatherInfo);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container">

        <section className="search_cont">
          <input type="text" className='search' placeholder='Search for a City !' autoFocus value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <i class="fa-solid fa-magnifying-glass" onClick={getWeatherInfo}></i>
        </section>
{/* importing our temp card */}
        <WeatherCard tempInfo = {tempInfo}/>

      </div>
    </>
  )
}

export default App




