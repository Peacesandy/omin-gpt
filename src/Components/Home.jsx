import React from 'react'
import  '../Styles/Home.css'
import People from '../Assets/pexels-fauxels-3182812 Background Removed 1 (1).png'
import Yellowlong from '../Assets/Rectangle 13060.png'
import Whiterectangle from '../Assets/Rectangle 13061 (2).png'
import Claphands from '../Assets/pexels-kindel-media-7688458 Background Removed 1.png'
import Purplevector from '../Assets/Ellipse 94.png'
import Purplearrow from '../Assets/Vector (4).png'
import Greenvector from '../Assets/Ellipse 95.png'
import Greenarrow from '../Assets/Vector (5).png'
import Greenrectangle from '../Assets/Rectangle 13058 (1).png'
import Purplerectangle from '../Assets/Rectangle 13057.png'
import Techwoman from '../Assets/pexels-andrea-piacquadio-920382 Background Removed 1.png'
import Yellowvector from '../Assets/Rectangle 13060.png'


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
          <img src='' alt="" className='purple-vector'/>
          <img src='' alt="" className='purple-arrow' />
          </div>
          <div>
          <img src={Purplevector} alt="" className='purple-vector'/>
          <img src={Purplearrow} alt="" className='purple-arrow' />
      </div>
      <div className='second-images'>
        <img src={Greenvector} alt="" />
          <img src={Greenarrow} alt="" />
          <img src={Claphands} alt="" />
        <img src={Whiterectangle} alt="" />
      </div>
      <div className='third-images'>
        <img src={Greenrectangle} alt="" />
        <img src={Purplerectangle} alt="" />
        <img src={Techwoman} alt="" />
        <img src={Yellowvector} alt="" />
      </div>
    </div>
  )
}

export default Home