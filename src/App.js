import React from "react";
import axios from "axios";

import Header from "./components/Header";
import TodayWeather from "./components/TodayWeather";
import ForecastTile from "./components/ForecastTile";

class App extends React.Component {

  state = {
    calgaryWeather: '',
    charlottetownWeather: '',
    torontoWeather: ''
  }

  componentDidMount () {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=51.049999&lon=-114.066666&exclude=alerts,minutely,hourly&appid=7f6d06daca8850915944e8b1f723dfb9')
      .then(data => {
        this.setState({
          calgaryWeather: data.data
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

  render() {
    return (
      <div className="App">
        <Header />
        <TodayWeather />
        <ForecastTile />
        <ForecastTile />
        <ForecastTile />
        <ForecastTile />
      </div>
    );
  }
}

export default App;
