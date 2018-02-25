import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD } from './../../../constants/weathers';
import '../../../../public/style/style.css';

const WeatherData = () => (<div className='weatherDataCont'> 
    <WeatherTemperature temperature={20} weatherState={CLOUD}/>
    <WeatherExtraInfo humidity={80} wind={"10"}/>
    </div>);

export default WeatherData;