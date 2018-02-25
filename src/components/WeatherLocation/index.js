import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import '../../../public/style/style.css';
import { CLOUD } from './../../constants/weathers';
const data = {
    temperature: 20,
    weatherState: CLOUD,
    humidity: 10,
    wind: "10 m/s",
};
const WeatherLocation = () => ( <div className="weatherLocationCont"> 
        <Location city={"Buenos Aires!"}/>
        <WeatherData data={data} />
 </div> 
 );

export default WeatherLocation;