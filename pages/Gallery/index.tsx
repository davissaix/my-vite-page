import React from 'react'
import './styles.css'
import { Link } from "react-router-dom";
import street from "../../src/assets/motorcycle_small.jpg"
import cuba from "/../src/assets/varadero sunset88.jpg"
import argentina from  "/../src/assets/CATARATAS iGUAZU-small.jpg" 
import france from "/../src/assets/paris1.jpg"
import peru from "/../src/assets/peru1.jpg"
import colombia from "/../src/assets/guaduas.jpg" 
import nude from "/../src/assets/nudeOutOfFocus.jpg" 
const Gallery = () => {
  return (
      <div>
          <main className="mains-container">
              <section className="street-photography">
                  <div className="grid-container">
                      <h2 className="h2">Street Photography</h2>
                      <img className="img" src={street} alt="motorcycle man on the road"/>
                          <Link to='./Street'  className="button-more">more..</Link>
                  </div>
              </section>
              <section className="cuba">
                  <div className="grid-container">
                      <h2 className="h2">Cuba</h2>
                      <img className="img" src={cuba} alt="Sunset"/>
                      <Link to='./Cuba'  className="button-more">more..</Link>
                  </div>
              </section>
              <section className="argentina">
                  <div className="grid-container argent">
                      <h2 className="h2">Argentina</h2>
                      <img className="img" src={argentina} alt="Cataratas Iguazú"/>
                      <Link to='./Argentina'  className="button-more">more..</Link>
                  </div>
              </section>
              <section className="france">
                  <div className="grid-container">
                      <h2 className="h2">France</h2>
                      <img className="img" src={france} alt="Tour eiffel"/>
                      <Link to='./France'  className="button-more">more..</Link>
                  </div>
              </section>
              <section className="perus">
                  <div className="grid-container">
                      <h2 className="h2">Peru</h2>
                      <img className="img" src={peru} alt="machu pichu"/>
                      <Link to='./Peru'  className="button-more">more..</Link>
                  </div>
              </section>
              <section className="colombia">
                  <div className="grid-container">
                      <h2 className="h2">Colombia</h2>
                      <img className="img" src={colombia}alt="bamboo and a red bridge"/>
                      <Link to='./Colombia'  className="button-more">more..</Link>
                  </div>
              </section>
              <section className="nude">
                  <div className="grid-container">
                      <h2 className="h2">Nude and Boudoir (+18)</h2>
                      <img className="img" src={nude} alt="bamboo and a red bridge"/>
                      <Link to='./Nude'  className="button-more">more..</Link>
                  </div>
              </section>
          </main>
      </div>
  )
}

export default Gallery