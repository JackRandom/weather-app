import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecastSummary';
import '../styles/forecast-summaries.css';

const ForecastSummaries = (props) => (
<div className="forecast-summaries">
    {
    props.forecasts.map(forecast => (
        <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature.max}
        handleForecastSelect={props.handleForecastSelect}
        />
    ))
    }
    </div>
);

ForecastSummaries.propTypes = {
    forecasts: PropTypes.array.isRequired,
    handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;