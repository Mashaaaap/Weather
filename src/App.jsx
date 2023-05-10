import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import config from './config'

const App = () => {
        const [weather, setWeather] = useState('Loading...')
        let cityInput = useRef(null)
        const setWeatherAPI = (city = 'London') => {
            axios.get(`http://api.weatherapi.com/v1/current.json?key=${config.apiKey}&q=${city}&aqi=no`)
            .then((res) => {
                setWeather (res.data.current.temp_c)
            })
        }
        useEffect(() => {
            setWeatherAPI()
            cityInput.current.addEventListener('input', ()=> {
                setWeatherAPI(cityInput.current.value)
            })
        }, [])
        return (
            <div>
                <input ref={cityInput} placeholder="write your city"/>
                <h1>
                    {weather}
                </h1>
            </div>
        )
}

export default App