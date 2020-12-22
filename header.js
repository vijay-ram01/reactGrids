import React from 'react'
import './header.css'

function Header() {
    return(
        <div id="app-header">
        <div id="header-left">
        <a id="logo">
        <h1>EDYODA</h1>
        <p>Stories</p>
        </a>

        <div id="explore-categories">
            Explore Categories
            <span>
                >
            </span>
        </div>
        </div>

        <div id="header-right">
            <p>EdYoda is free learning and knowledge sharing platform for techies</p>
            <a id="header-btn">Go to Main Website</a>
        </div> 
            
        </div>
    );
}

export default Header;