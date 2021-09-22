import React from "react";
import axios from "axios";

import Header from "./components/Header";
import TodayWeather from "./components/TodayWeather";
import ForecastTile from "./components/ForecastTile";

class App extends React.Component {

  state = {
    weatherData: ''
  }

  componentDidMount () {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Calgary&cnt=5&appid=7f6d06daca8850915944e8b1f723dfb9')
      .then(data => {
        this.setState({
          weatherData: data
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
