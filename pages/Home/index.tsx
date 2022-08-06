import React from 'react'
import bici from '../../src/assets/man-in-bicycle.jpg'
import './styles.css'


const Home = () => {
  return (
    <div className="main">
        
        <div className="main-container">
            <div className="man-in-bicycle">
                <img className="cat" src={bici} />
            </div>
            <div className="intro">
                <p className="text-intro">Welcome to my website! Here you'll find my photos from my travels around the world.  </p>
            </div>
        </div>
        
        

 
    </div>
  )
}

export default Home