import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [weather_data, setWeatherData] = useState(null)


    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=3d5f4d7f5b1b6d5c0a0c1e3f0d9e9b7d')
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

  return (
    <>
        <div style={{display: 'block', width: '100%'}}>
            <div className='window'>

            </div>
        </div>


    </>
  )
}

export default App
