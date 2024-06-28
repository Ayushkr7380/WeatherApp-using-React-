import { useContext, useState } from "react"
import WeatherData from "../WeatherData/WeatherData"
import './Weather.css'
import WeatherContext from "../../Context/WeatherContext/WeatherContext"
function Weather(){
    const context = useContext(WeatherContext)
    const { city , setCity , searchWeather } = context;

    return (
        <div id="weatherbody">
            <h1 style={{
                color:'white',
                textDecoration:'underline',
                fontFamily:"monospace"
            }}>Weather App</h1>
            <div id="search">
                <input 
                    type="text"
                    placeholder="Enter City Name"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)} 
                />
                <button disabled={city === ''} onClick={searchWeather}>Search</button>
            </div>
            <WeatherData/>
        </div>
    )
}
export default Weather