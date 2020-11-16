import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecastSummary';

const ForecastSummaries = (props) => (
<div className="forecast-summaries">
    {
    props.forecasts.map(forecast => (
        <ForecastSummary
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature.max}
        />
    ))
    }
    </div>
);

ForecastSummaries.propTypes = {
    forecasts: PropTypes.array.isRequired,
};
export default ForecastSummaries;