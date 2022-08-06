import React from 'react'
import './style.css'
import play from '../../assets/icons/plays.png'
import sound from '../../assets/icons/soundCloud.png'
import insta from '../../assets/icons/insta.png'

const Footer = () => {
  return (
      <div>
          <footer className="footer">
              <div className="footer-container">
                  <p className="medellin">Medellín, Colombia</p>
                  <p className="david">© David Ávila All Rights Reserved</p>
                  <div className="plays">
                      <a href="https://www.youtube.com/channel/UCyYyjWLi-jR7WW3Opetw8zg" target="_blank" rel="noopener noreferrer">
                          <img src={play} alt="play-icon" />
                      </a>
                  </div>
                  <div className="soundCloud">
                      <a href="https://soundcloud.com/david-paris-197842585" target="_blank" rel="noopener noreferrer">
                          <img src={sound} alt="" />
                      </a>
                  </div>
                  <div className="insta">
                      <a href="https://www.instagram.com/davidparis_ai/" target="_blank" rel="noopener noreferrer">
                          <img src={insta} alt="instagram-icon" />
                      </a>

                  </div>

              </div>

          </footer>
      </div>
  )
}

export default Footer