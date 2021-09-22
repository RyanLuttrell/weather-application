import React from 'react';

export default class ForecastTile extends React.Component {
    render() {
        return (
            <div>
                <h2 className="forecast-tile-day">Wed</h2>
                <i class="fad fa-clouds"></i>
                <p className="forecast-tile-temp">18&#176;</p>
            </div>
        )
    }
}