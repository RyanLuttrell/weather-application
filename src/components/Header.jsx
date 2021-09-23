import React from 'react';

import './styles/Header.css';

export default class Header extends React.Component {

    citySelector = (city) => {
        this.props.handleClick(city)
    }

    render() {
        return (
            <header>
                <h2 className={this.props.select === 'calgary' ? 'header-city-text-select' : 'header-city-text'} onClick={() => this.citySelector('calgary')} >CALGARY</h2>
                <h2 className={this.props.select === 'charlottetown' ? 'header-city-text-select' : 'header-city-text'} onClick={() => this.citySelector('charlottetown')}>CHARLOTTETOWN</h2>
                <h2 className={this.props.select === 'toronto' ? 'header-city-text-select' : 'header-city-text'} onClick={() => this.citySelector('toronto')}>TORONTO</h2>
            </header>
        )
    }
}