import React, { useEffect, useState } from "react";
import getLocation from "./requests/getLocation";
import LocationDetails from "./components/location-details";
import ForecastSummaries from "./components/forecast-summaries";
import ForecastDetails from "./components/ForecastDetails";
// import ForecastSummary from './components/forecastSummary';
import "./styles/app.css";
import PropTypes from "prop-types";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "",
  });
  const [city, setCity] = useState({ city: "Manchester" });

  useEffect(() => {
    getLocation(location, setForecasts, setLocation);
  }, [location.city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(city);
  };

  const handleChange = (e) => {
    setCity({
      ...city,
      [e.target.name]: e.target.value,
    });
  };

  // const selectedForecast = forecasts.find(
  //   (forecast) => forecast.date === selectedDate
  // );

  // const handleForecastSelect = (date) => {
  //   setSelectedDate();
  // };

  return (
    <div className="forecast">
      <LocationDetails
        city={location.city} //.city might need taken out
        country={location.country} //.country might need taken out
      />

      {forecasts && forecasts.length && (
        <ForecastSummaries
          forecasts={forecasts}
          // handleForecastSelect={handleForecastSelect}
        />
      )}

      <form type="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          value={city.city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* {selectedForecast && <ForecastDetails forecast={selectedForecast} />} */}
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};
export default App;
