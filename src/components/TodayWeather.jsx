import React from 'react';

export default class TodayWeather extends React.Component {
    render() {
        return (
            <div>
                <h2 className="today-weather-text">Today</h2>
                <i className="fad fa-clouds"></i>
                <h3 className="today-weather-temperature">19&#176;</h3>
                <p className="today-weather-climate">Clouds</p>
            </div>
        )
    }
}