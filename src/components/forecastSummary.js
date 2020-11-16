import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
}) => {
  return (
    <>
      <div className="date" >
        {date}
      </div>
      <div className="temperature" >
        {temperature}&deg;c
      </div>
      <div className="description" >
        {description}
      </div>
      <div className="icon" >
        {icon}
      </div>

    </>
  );
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }),
};

export default ForecastSummary;