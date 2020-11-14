import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = (props) => 
                                                    // this i just added v
<h1 className="location-details">{props.city}, {props.country}, {props.location}</h1>;

LocationDetails.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
};



export default LocationDetails;