import React from 'react'
import './nude.css'
// import ReactAudioPlayer from 'react-audio-player'
import ahah from "../../src/assets/ahahaha.mp3"
import gif from "../../src/assets/ahahah.gif"
import ReactPlayer from 'react-player'

const Nude = () => {
  return (
    <div className='nude11'>
      <div className='Nude1'>
        <div className='jpark'><img className='imagen' src={gif} alt="" /></div>
       
        
        <div className='textos'>
          
            <h1 >ah ah ah </h1>

            <h1 className='lineHeigh'>You didn't say the magic word </h1>
           
         
          

            <ReactPlayer height='6vh' width='50%' className='player' url={ahah} controls/>

            <h1 >ah ah ah </h1>

            <h1 className='lineHeigh'>You didn't say the magic word </h1>

        </div>


      </div>
    </div>
   
  )
}

export default Nude