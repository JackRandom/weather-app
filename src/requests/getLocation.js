import axios from "axios";

const getLocation = async (location, setForecasts, setLocation) => {
  await axios
    .get(`https://weather-app-alt.herokuapp.com/forecast?city=${location.city}`)
    .then((response) => {
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((err) => console.error(err));
};

export default getLocation;
