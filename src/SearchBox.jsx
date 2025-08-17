import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city:city,
                country:jsonResponse.sys.country,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                Weather:jsonResponse.weather[0].description,
                pressure:jsonResponse.main.pressure,
                weatherMain: jsonResponse.weather[0].main,   
                windSpeed:jsonResponse.wind.speed,
                windDeg:jsonResponse.wind.deg,
                windGust: jsonResponse.wind.gust,
                sunrise:jsonResponse.sys.sunrise,
                sunset:jsonResponse.sys.sunset,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    }

    let handelChange =(e)=>{
        setCity(e.target.value);
    }

    let handelSubmit = async(e)=>{
        try{
            e.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        }catch (err){
            setError(true)
        } 
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handelSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    className='Search'
                    value={city} 
                    onChange={handelChange}
                />
                <Button variant="contained" type='submit' size="large">Search</Button>
                {error&&<p>No Such Place in Our Api!</p>}
            </form>
        </div>
    )
}
