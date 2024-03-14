import React from 'react';
import "./body.css"

function Hero() {
    function apiCall(){
        fetch('https://api.weatherapi.com/v1/current.json?q=Amstelveen&key=6e0e7573a0a24bc0811195352231710')
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            document.getElementById('data').innerHTML  = data
        })
   }
    
    return (
        
       <div className='body'>
              <button onClick={apiCall}>Click me</button>
              <p id='data'></p>
       </div>
        
    )
}

export default Hero;