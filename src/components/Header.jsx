import React from 'react';

import './styles/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h2 className="header-city-text">CALGARY</h2>
                <h2 className="header-city-text">CHARLOTTETOWN</h2>
                <h2 className="header-city-text">TORONTO</h2>
            </header>
        )
    }
}