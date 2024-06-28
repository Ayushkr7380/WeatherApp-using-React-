    import { useEffect, useState } from "react";
    import WeatherContext from "../WeatherContext/WeatherContext";
    import axios from "axios";

    function WeatherProvider(props){
        const [city , setCity] = useState('muzaffarpur')
        const [weatherData,setWeatherData] = useState([]);

        const [ correctCity , setCorrectCity ] = useState(false)
        const [ isLoading , setIsLoading] = useState(true)

        const WeatherURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
        const API_KEY = '4d04704af4c9b4797f221d9a5d835294';
        const cityName = city.trim().toLowerCase();

        async function searchWeather(){
            try{
                const response = await axios.get(`${WeatherURL}&q=${cityName}&appid=${API_KEY}`)
                setWeatherData(response.data)
                setCorrectCity(true)
                setIsLoading(false)
            }
            catch(e){
                console.log(e)
                setCorrectCity(false)
                setIsLoading(false)
            }
        }
        useEffect(()=>{
            searchWeather()
        },[])

        return(
            <>
                <WeatherContext.Provider value={{city,setCity ,searchWeather ,weatherData , correctCity , isLoading}}>
                    {props.children}
                </WeatherContext.Provider>
            </>
        )
    }
    export default WeatherProvider