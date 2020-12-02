import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import ForecastDetails from './components/ForecastDetails';
// import ForecastSummary from './components/forecastSummary';
import './styles/app.css';
import PropTypes from 'prop-types';
import React, { useState } from "react";


const App = (props) => {
    
    const [selectedDate, setSelectedDate] = useState
    (props.forecasts[0].date);

    const selectedForecast = props.forecasts.find
    (forecast => forecast.date === selectedDate);

    const handleForecastSelect = (date) => {
        setSelectedDate(date);
      };

    return (
    <div className="forecast">
        <LocationDetails
            city={props.location.city}
            country={props.location.country}
        />

        <ForecastSummaries forecasts={props.forecasts}
        handleForecastSelect={handleForecastSelect} />

        <ForecastDetails forecast={selectedForecast} />
    </div>
    )
}

App.propTypes={
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired,
}
export default App;

