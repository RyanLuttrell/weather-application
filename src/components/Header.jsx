import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h2 className="header-city-text">CALGARY</h2>
                <h2 className="header-city-text">CHARLOTTETOWN</h2>
                <h2 className="header-city-text">TORONTO</h2>
            </div>
        )
    }
}