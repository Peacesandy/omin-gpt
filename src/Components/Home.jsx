import React from 'react'
import  '../Styles/Home.css'
import People from '../Assets/pexels-fauxels-3182812 Background Removed 1 (1).png'
import Yellowlong from '../Assets/Rectangle 13060.png'
import Whiterectangle from '../Assets/Rectangle 13061 (2).png'
import Claphands from '../Assets/pexels-kindel-media-7688458 Background Removed 1.png'

function Home() {
  return (
    <div className='home-container'>
      <div className='text-container'>
      <div>
        <h1>Seamless Communication with Omingpt</h1>
      </div>
      <div>
        <h4>Powered by chat gpt-4</h4>
      </div>
      <div>
        <p>Experience the power of AI language models with OmniGPT.
        Our chat platform provides seamless communication
        across multiple channels.</p>
      </div>
      <div>
        <p>
        Try for free! 15-day trial, no credit card required.
        </p>
      </div>
      <div>
        <button>Show your free trial</button>
      </div>
      </div>
      <div className='images-left'>
          <img src={People} alt="" className='people-image'/> 
          <img src={Yellowlong} alt="" className='yellow-long' />
      </div>
      <div>
        <img src={Whiterectangle} alt="" />
        <img src={Claphands} alt="" />
      </div>
    </div>
  )
}

export default Home