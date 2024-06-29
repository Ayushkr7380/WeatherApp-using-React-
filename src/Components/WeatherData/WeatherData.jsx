import { useContext, useEffect, useState } from "react"
import './WeatherData.css'
import WeatherContext from "../../Context/WeatherContext/WeatherContext"
import sunImage from '../../assets/Images/sun.png'
import cloudImage from '../../assets/Images/cloud.png'
import rainImage from '../../assets/Images/raining.png'
import mistImage from '../../assets/Images/fog.png'
import thunderImage from '../../assets/Images/thunder.png'
import snowImage from '../../assets/Images/snow.png'
import cloudyImage from '../../assets/Images/cloudy.png'

function WeatherData(){
    const context = useContext(WeatherContext);
    const { correctCity, weatherData , isLoading }  = context;
    
    const [image , setImage ] = useState('')
    
    
    useEffect(()=>{
        if (weatherData.weather) {    
            setImage(weatherData.weather[0].main.toLowerCase());
        }
    },[weatherData])

    let imageSource = ''
    switch (image) {
        case 'clouds':
            imageSource = cloudyImage;
            break;
        case 'mist':
            imageSource = mistImage;
            break;
    
        case 'rain':
            imageSource = rainImage;
            break;
        case 'snow':
            imageSource = snowImage;
            break;
        case 'clear': 
            imageSource = sunImage;
            break;
        case 'thunderstorm':
            imageSource = thunderImage;
            break;
        default:
            imageSource = cloudImage;
            break;
    }
    return(
        <> {isLoading ?  <h1 style={{color:'white',
            fontStyle:'italic'
        }}>Loading ....</h1>  :  correctCity ? 
            <div>
                <div id="cityname">
                    <h1>{weatherData.name}</h1>
                    <img src={imageSource} height="150px" width="150px" alt="sky" />                   
                </div>
                <div id="sky">
                    <span style={{fontStyle:'italic',color:'white'}}>{weatherData.weather && weatherData.weather.map((m,idx)=><span key={`m-${idx}`}>{m.main}</span>)} in {weatherData.name}</span>
                </div>
                <div id="weatherdetails">
                    <p> <span>Temp : </span>{weatherData.main && weatherData.main.temp} °C</p>
                    <p> <span>Pressure :</span> {weatherData.main && weatherData.main.pressure}hPa</p>
                    <p> <span>Humidity :</span> {weatherData.main && weatherData.main.humidity}%</p>
                    <p> <span>Speed :</span> {((weatherData.wind && weatherData.wind.speed) * 3.6 ).toFixed(2)} km/hr</p>
                </div>
            </div>
            : <h1 style={{color:'white',
                fontStyle:'italic'
            }}>Incorrect City Name</h1>  }
            
        </>
    )
}

export default WeatherData