import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import Moment from "moment";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  handleForecastSelect,
}) => {
  return (
    <h2>
      <div className="forecast-summary__date" data-testid="date-id">
        <span> {Moment(date).format("ddd Do MMM")}</span>
      </div>
      <div
        className="forecast-summary__temperature"
        data-testid="temperature-id"
      >
        <span> {temperature}&deg;c </span>
      </div>
      <div
        className="forecast-summary__description"
        data-testid="description-id"
      >
        <span> {description} </span>
      </div>
      <div className="forecast-summary__icon" data-testid="icon-id">
        <span>
          <WeatherIcon name="owm" iconId={icon} />
        </span>
      </div>

      <button onClick={() => handleForecastSelect(date)}>More Details</button>
    </h2>
  );
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    handleForecastSelect: PropTypes.func.isRequired,
  }),
};

export default ForecastSummary;
