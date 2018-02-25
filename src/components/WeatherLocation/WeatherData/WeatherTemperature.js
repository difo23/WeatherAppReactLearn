import React from 'react';
import WeatherIcons from 'react-weathericons';
//import WeatherIcon from 'react-open-weather-icons';
import '../../../../public/style/style.css';
import '../../../../public/style/weather-icons.min.css';
import PropTypes from 'prop-types';
import {CLOUD, 
    CLOUDY,
    SLEET, 
    HAZE ,
    WIND
    } from './../../../constants/weathers';


const stateToIconName = (weatherState) => {
    switch (weatherState) {
        case CLOUD:
            return "cloud" ;
        case CLOUDY:
            return "day-cloudy-high";
        case SLEET:
            return "day-sleet";
        case HAZE:
            return "day-haze";
        case WIND:
            return "day-light-wind";

        default:
            return "na";
        }
       
    };

const getWeatherIcon =(weatherState) => {
            return ( <WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" />);

};


const WeatherTemperature =({temperature, weatherState}) => {

return (
    <div className='weatherTemperatureCont'>
    {getWeatherIcon(weatherState)}
    
    <span className="temperature" >{`${temperature}`}</span>
    <span className="temperatureType">Cº</span>
    </div>);
};


WeatherTemperature.propTypes = {
temperature: PropTypes.number,
weatherState: PropTypes.string,
};


export default WeatherTemperature;