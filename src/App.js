import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import ForecastDetails from './components/ForecastDetails';
// import ForecastSummary from './components/forecastSummary';
import './styles/app.css';
import PropTypes from 'prop-types';
import React, { useState } from "react";


const App() => {
    
    const [selectedDate, setSelectedDate] = useState
    (0);

    const [forecasts, setForecasts] = useState([]);

    const [location, setLocation] = useState({
            city:'', 
            country:''
        });

    const selectedForecast = forecasts.find
    (forecast => forecast.date === selectedDate);

    const handleForecastSelect = (date) => {
        setSelectedDate(0);
      };

    

    return (
    <div className="forecast">
        <LocationDetails
            city={location.city} //.city might need taken out
            country={location.country} //.country might need taken out
        />

        <ForecastSummaries forecasts={forecasts}
        handleForecastSelect={handleForecastSelect} />

        {
            selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
        }
    </div>
    )
}

// App.propTypes={
//     location: PropTypes.shape({
//         city: PropTypes.string,
//         country: PropTypes.string,
//     }).isRequired,
//     forecasts: PropTypes.array.isRequired,
// }
export default App;

