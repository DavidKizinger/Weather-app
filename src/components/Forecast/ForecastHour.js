import React from 'react'
import PropTypes from 'prop-types'

const ForecastHour = props => {
    const { temp, tempF, month, day, icon, isCelsius } = props;
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

    return (
        <div className="forecast-day">
            <div > {month}.{day}</div>
            <img src={iconUrl} />
            <span>
                {isCelsius ? `${Math.floor(temp)} °C` : `${Math.floor(tempF)} °F`}
            </span>
        </div>
    );
};

ForecastHour.propTypes = {
    temp: PropTypes.number.isRequired,
    tempF: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
};

export default ForecastHour;
