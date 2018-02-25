import React from 'react';
import PropTypes from "prop-types";
import '../../../../public/style/style.css';

const WeatherExtraInfo = ({ humidity, wind}) => {
    return (<div className='weatherExtraInfoCont'>
        <span className="extraInfoText"> {`Humedad: ${humidity} %`}</span>
        <span className="extraInfoText">{`Vientos: ${wind} m/s `}</span>
    </div>);

};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,

}

export default WeatherExtraInfo;