import React from 'react';

import './styles/ForecastTile.css';

export default class ForecastTile extends React.Component {
    render() {
        return (
            <div className='forecast-tile'>
                <h2 className="forecast-tile-day">Wed</h2>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className="forecast-tile-image" />
                <p className="forecast-tile-temp">18&#176;</p>
            </div>
        )
    }
}