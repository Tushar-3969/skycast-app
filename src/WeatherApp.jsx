import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react"
import "./WeatherApp.css";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]= useState({
        
        city: "Delhi",
        country: "IN",
        Weather: "overcast clouds",
        weatherMain: "Clouds",
        temp: 26.36,
        tempMin: 24.50,
        tempMax: 28.12,
        feelsLike: 27.10,
        humidity: 89,
        pressure: 1004,
        windSpeed: 3.6,   
        windDeg: 120,     
        windGust: 5.1,    
        sunrise: 1755396000, 
        sunset: 1755442200 
    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div className="WeatherApp">
            <h2>🌤 SkyCast Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}