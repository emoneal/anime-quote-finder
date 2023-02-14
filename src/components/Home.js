import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home-div">
            <div className="welcome-div">
                <h2>Welcome to Anime Quote Finder!</h2>
                <h3><Link to="/Finder">Get Started!</Link></h3>

            </div>
        </div>
    )
}

export default Home