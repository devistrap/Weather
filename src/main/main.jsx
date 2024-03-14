import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../app/App.jsx'
import Nav from '../nav/nav.jsx'
import Hero from '../body/body.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Hero />
    <Nav />
    
  </React.StrictMode>,
)
