import React from 'react';

import './styles/ForecastTile.css';

export default class ForecastTile extends React.Component {
    render() {
        return (
            <div className='forecast-tile'>
                <h2 className="forecast-tile-day">{this.props.day}</h2>
                <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} alt={this.props.alt} className="forecast-tile-image" />
                <p className="forecast-tile-temp">{Math.round(this.props.temp - 273.15)}&#176;</p>
            </div>
        )
    }
}