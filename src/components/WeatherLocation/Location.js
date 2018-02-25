import React from 'react';
import PropTypes from 'prop-types';
import '../../../public/style/style.css';

//const Location = (prop) => {
const Location = ({ city }) => {
    return (
        <div className="locationCont" ><h1> {city}</h1></div>
    );

};
// Validacion de la varible Location me aseguro que tendra un string.Location

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;
