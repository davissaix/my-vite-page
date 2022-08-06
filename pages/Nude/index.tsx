import React from 'react'
import './nude.css'
import ReactAudioPlayer from 'react-audio-player';


const Nude = () => {
  return (
    <div className='nude11'>
      <div className='Nude1'>
        <div className='jpark'><img className='imagen' 
        src="../src/assets/ahahah.gif" alt="" /></div>
       
        
        <div className='textos'>
          
            <h1 >ah ah ah </h1>

            <h1 className='lineHeigh'>You didn't say the magic word </h1>
           
         
          

          <ReactAudioPlayer
            src="../src/assets/ahahaha.m4a"
            autoPlay
            controls
          />

            <h1 >ah ah ah </h1>

            <h1 className='lineHeigh'>You didn't say the magic word </h1>

        </div>


      </div>
    </div>
   
  )
}

export default Nude