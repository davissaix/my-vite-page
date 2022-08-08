import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import Formular from '../pages/Formular'
import Street from '../pages/Street'
import Argentina from '../pages/Argentina'
import Cuba from '../pages/Cuba'
import France from '../pages/France'
import Peru from '../pages/Peru'
import Colombia from '../pages/Colombia'
import Nude from '../pages/Nude'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
 
  
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Header/>
          <Routes> 
            <Route path='' element = {<Home/>}/>
            <Route path='/Gallery' element ={<Gallery/>}/>
                <Route path = '/Gallery/Street' element = {<Street/>}/>
                <Route path = '/Gallery/Cuba' element = {<Cuba/>}/> 
                <Route path = '/Gallery/Argentina' element = {<Argentina/>}/>
                <Route path = '/Gallery/France' element = {<France/>}/>
                <Route path = '/Gallery/Peru' element = {<Peru/>}/>
                <Route path = '/Gallery/Colombia' element = {<Colombia/>}/>
                <Route path = '/Gallery/Nude' element = {<Nude/>}/>
                
            <Route path='/About' element = {<About/>}/>
            <Route path='/Formular' element ={<Formular/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
