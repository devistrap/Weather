import React from 'react';
import './nav.css';

function Nav() {
    return (
        <div>
            <nav id='nav'>
                <h1>Weather App </h1>
                <ul>

                    <li><img src='./src/nav/img/home.svg' id='home-img' /><a id='home-text' href="#">Home</a></li>
                    <li><img src='./src/nav/img/about.svg' id='home-img' /><a id="about-text" href="#">About</a></li>
                    <li><img src='./src/nav/img/contact.svg' id='home-img' /><a id='contact-text' href="#">Contact</a></li>
                </ul>
                <img src='./src/nav/img/menu.svg' id='menu-img' onClick={
                    () => {
                            
                            document.getElementById('nav').style.display = 'none';
                            document.getElementById('mini-nav').style.display = 'block';
                            document.getElementById('menu-img').style.display = 'none';
                            document.getElementById('menu-img1').style.display = 'block';
                    }
                } />
            </nav>
            <div id='mini-nav'>
                <img src='./src/nav/img/menu.svg' id='menu-img1' onClick={
                        () => {                            
                                
                                document.getElementById('nav').style.display = 'block';
                                document.getElementById('mini-nav').style.display = 'none';
                                document.getElementById('menu-img').style.display = 'block';
                        }
                    } />
            </div>
        </div>
    );
}

export default Nav;
