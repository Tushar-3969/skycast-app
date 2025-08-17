import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
    let INIT_URL ="https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL  = "https://images.unsplash.com/photo-1606444695047-06a24fdb6f67?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=451&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <div className='cardContainer'>
            <Card>
                <CardMedia
                    component="img"
                    height="200"
                    image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                    alt="Weather display image"
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {info.city}
                        {info.humidity>80?
                            <i className="fas fa-cloud-showers-heavy"></i>:
                            info.temp>15?
                            <i className="fas fa-sun"></i>:
                            <i className="fas fa-snowflake"></i>
                        }
                    </Typography>
                    <Typography variant="body2" component={"span"}>
                        <p>🌍 Location = {info.city}, {info.country}</p>
                        <p>🌡️ Temperature = {info.temp}&deg;C</p>
                        <p>🌡️ Feels Like = {info.feelsLike}&deg;C</p>
                        <p>🌡️ Min Temp = {info.tempMin}&deg;C</p>
                        <p>🌡️ Max Temp = {info.tempMax}&deg;C</p>
                        <p>💧 Humidity = {info.humidity}%</p>
                        <p>📊 Pressure = {info.pressure} hPa</p>
                        <p>💨 Wind Speed = {info.windSpeed} m/s</p>
                        <p>🧭 Wind Direction = {info.windDeg}&deg;</p>
                        <p>🌬️ Wind Gust = {info.windGust} m/s</p>
                        <p>☁️ Weather = <i>{info.weatherMain}</i> ({info.Weather})</p>
                        <p>🌅 Sunrise = {new Date(info.sunrise * 1000).toLocaleTimeString()}</p>
                        <p>🌇 Sunset = {new Date(info.sunset * 1000).toLocaleTimeString()}</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}
