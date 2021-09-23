import React from 'react';

import './styles/TodayWeather.css';

export default class TodayWeather extends React.Component {
    render() {
        return (
            <section className="today-weather">
                <div className="today-primary-text">
                    <h2 className="today-weather-text">Today</h2>
                </div>
                <div className='today-info'>
                    <div className='today-weather-icon'>
                    <img src={`http://openweathermap.org/img/wn/${this.props.weather}@2x.png`} alt="" className="today-tile-image" />
                    </div>
                    <div className="today-weather-info">
                        <h3 className="today-weather-temperature">{Math.round(this.props.temp - 273.15)}&#176;</h3>
                        <p className="today-weather-climate">{this.props.climate}</p>
                    </div>
                </div>
            </section>
        )
    }
}