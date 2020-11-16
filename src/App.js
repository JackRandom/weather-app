// import logo from './logo.svg';
import './App.css';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import ForecastSummary from './components/forecastSummary';
import PropTypes from 'prop-types';


const App = props => (
    <div className="forecast">
        <LocationDetails
            city={props.location.city}
            country={props.location.country}
        />

        <ForecastSummaries forecasts={props.forecasts} />
    </div>
);

App.propTypes={
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired,
}
export default App;








// import logo from './logo.svg';
// import './App.css';
// import LocationDetails from './components/location-details';
// import PropTypes from 'prop-types';


// const App = (props) => {
//     return (
//         <div>
//             <LocationDetails location={PropTypes.location} /> 
//         </div>
// )
//     };

// export default App;
