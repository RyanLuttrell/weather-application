import React from "react";
import axios from "axios";
import './App.css';

import Header from "./components/Header";
import TodayWeather from "./components/TodayWeather";
import ForecastTile from "./components/ForecastTile";

class App extends React.Component {

  state = {
    calgaryWeather: '',
    charlottetownWeather: '',
    torontoWeather: '',
    todayIcon: '',
    todayWeather: '',
    todayTemp: '',
    iconOne: '',
    iconTwo: '',
    iconThree: '',
    iconFour: '',
    dayOne: '',
    dayTwo: '',
    dayThree: '',
    dayFour: '',
    tempOne: '',
    tempTwo: '',
    tempThree: '',
    tempFour: '',
    calgarySelect: true,
    charlottetownSelect: false,
    torontoSelect: false,
    cityWeather: 'calgary'
  }

  componentDidMount () {
    const arrayOfWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const date = new Date()
    const weekdayNumber = date.getDay()
    this.setState({
      dayOne: arrayOfWeekdays[weekdayNumber + 1],
      dayTwo: arrayOfWeekdays[weekdayNumber + 2],
      dayThree: arrayOfWeekdays[weekdayNumber + 3],
      dayFour: arrayOfWeekdays[weekdayNumber + 4],
    })
    
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=51.049999&lon=-114.066666&exclude=alerts,minutely,hourly&appid=7f6d06daca8850915944e8b1f723dfb9')
      .then(data => {
        this.setState({
          calgaryWeather: data.data,
          todayIcon: data.data.current.weather[0].icon,
          todayTemp: data.data.current.feels_like,
          todayWeather: data.data.current.weather[0].main,
          iconOne: data.data.daily[1].weather[0].icon,
          iconTwo: data.data.daily[2].weather[0].icon,
          iconThree: data.data.daily[3].weather[0].icon,
          iconFour: data.data.daily[4].weather[0].icon,
          tempOne: data.data.daily[1].temp.day,
          tempTwo: data.data.daily[2].temp.day,
          tempThree: data.data.daily[3].temp.day,
          tempFour: data.data.daily[4].temp.day
        })
      })
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=46.238888&lon=-63.129166&exclude=alerts,minutely,hourly&appid=7f6d06daca8850915944e8b1f723dfb9')
    .then(data => {
      this.setState({
        charlottetownWeather: data.data
      })
    })
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=43.651070&lon=-79.347015&exclude=alerts,minutely,hourly&appid=7f6d06daca8850915944e8b1f723dfb9')
    .then(data => {
      this.setState({
        torontoWeather: data.data
      })
    })
  }

  citySelector = (city) => {
    this.setState({
      cityWeather: city,
    })

    if (city === 'calgary') {
      this.setState({
        todayIcon: this.state.calgaryWeather.current.weather[0].icon,
        todayTemp: this.state.calgaryWeather.current.feels_like,
        todayWeather: this.state.calgaryWeather.current.weather[0].main,
        iconOne: this.state.calgaryWeather.daily[1].weather[0].icon,
        iconTwo: this.state.calgaryWeather.daily[2].weather[0].icon,
        iconThree: this.state.calgaryWeather.daily[3].weather[0].icon,
        iconFour: this.state.calgaryWeather.daily[4].weather[0].icon,
        tempOne: this.state.calgaryWeather.daily[1].temp.day,
        tempTwo: this.state.calgaryWeather.daily[2].temp.day,
        tempThree: this.state.calgaryWeather.daily[3].temp.day,
        tempFour: this.state.calgaryWeather.daily[4].temp.day
      })
    } else if (city === 'charlottetown') {
      this.setState({
        todayIcon: this.state.charlottetownWeather.current.weather[0].icon,
        todayTemp: this.state.charlottetownWeather.current.feels_like,
        todayWeather: this.state.charlottetownWeather.current.weather[0].main,
        iconOne: this.state.charlottetownWeather.daily[1].weather[0].icon,
        iconTwo: this.state.charlottetownWeather.daily[2].weather[0].icon,
        iconThree: this.state.charlottetownWeather.daily[3].weather[0].icon,
        iconFour: this.state.charlottetownWeather.daily[4].weather[0].icon,
        tempOne: this.state.charlottetownWeather.daily[1].temp.day,
        tempTwo: this.state.charlottetownWeather.daily[2].temp.day,
        tempThree: this.state.charlottetownWeather.daily[3].temp.day,
        tempFour: this.state.charlottetownWeather.daily[4].temp.day
      })
    } else {
      this.setState({
        todayIcon: this.state.torontoWeather.current.weather[0].icon,
        todayTemp: this.state.torontoWeather.current.feels_like,
        todayWeather: this.state.torontoWeather.current.weather[0].main,
        iconOne: this.state.torontoWeather.daily[1].weather[0].icon,
        iconTwo: this.state.torontoWeather.daily[2].weather[0].icon,
        iconThree: this.state.torontoWeather.daily[3].weather[0].icon,
        iconFour: this.state.torontoWeather.daily[4].weather[0].icon,
        tempOne: this.state.torontoWeather.daily[1].temp.day,
        tempTwo: this.state.torontoWeather.daily[2].temp.day,
        tempThree: this.state.torontoWeather.daily[3].temp.day,
        tempFour: this.state.torontoWeather.daily[4].temp.day
      })
    }

  }

  render() {
    return (
      <div className="App">
        <Header select={this.state.cityWeather} handleClick={this.citySelector}/>
        <main>
          <TodayWeather weather={this.state.todayIcon} temp={this.state.todayTemp} climate={this.state.todayWeather}/>
          <section className="forecast-section">
            <ForecastTile icon={this.state.iconOne} day={this.state.dayOne} temp={this.state.tempOne}/>
            <ForecastTile icon={this.state.iconTwo} day={this.state.dayTwo} temp={this.state.tempTwo}/>
            <ForecastTile icon={this.state.iconThree} day={this.state.dayThree} temp={this.state.tempThree}/>
            <ForecastTile icon={this.state.iconFour} day={this.state.dayFour} temp={this.state.tempFour}/>
          </section> 
        </main>
      </div>
    );
  }
}

export default App;
