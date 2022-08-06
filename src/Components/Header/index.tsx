import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import enveloppe from '../../assets/icons/enve.png'
import info from '../../assets/icons/info.png'
import cams from '../../assets/icons/cams.png'
import homi from '../../assets/icons/hominimal.png'
import signature from '../../assets/icons/davidPhWhite.png'

const Header = () => {
  return (
    <header className="hero">
        <div className="hero-container">
            <div className="firma">   
                    <img src={signature} alt="signature-icon"/>
            </div>
            <div className="home">
            <Link to='./'> 
                    <img src={homi} alt="home-icon"/>
                </Link>
            </div>
            <div className="cams">
                <Link to='./Gallery'> 
                    <img src={cams} alt="camera-icon"/>
                </Link>   
            </div>
            <div className="info">
            <Link to='./About'> 
                    <img src={info} alt="info-icon"/>
                </Link>   
            </div>
            <div className="envelope">
            <Link to='./Formular'> 
                    <img src={enveloppe}/>
                </Link>
            </div>


        </div>
    </header>
  )
}

export default Header