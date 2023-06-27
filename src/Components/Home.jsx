import React from 'react'
import  '../Styles/Home.css'
import People from '../Assets/pexels-fauxels-3182812 Background Removed 1 (1).png'
import Yellowlong from '../Assets/Rectangle 13060.png'
import Claphands from '../Assets/pexels-kindel-media-7688458 Background Removed 1.png'
import Purplevector from '../Assets/Ellipse 94.png'
import Purplearrow from '../Assets/Vector (4).png'
import Greenvector from '../Assets/Ellipse 95.png'
import Greenarrow from '../Assets/sidegreenarrow.png'
import Greenrectangle from '../Assets/Rectangle 13058 (1).png'
import Purplerectangle from '../Assets/Rectangle 13057.png'
import Techwoman from '../Assets/pexels-andrea-piacquadio-920382 Background Removed 1.png'
import Yellowcomment from '../Assets/yellowcomment.png'


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
          
          <div className='purple-left'>
          <img src={Purplevector} alt="" className='purple-vector'/>
          <img src={Purplearrow} alt="" className='purple-arrow' />
      </div>
      <div className='second-images'>
      <img src={Greenarrow} alt="" />
        <img src={Greenvector} alt="" />
          <img src={Claphands} alt="" className='claphands'/>
          <img src={Greenrectangle} alt="" className='greenrectangle'/>
      </div>
      <div className='third-images'>
        <img src={Purplerectangle} alt="" className='lastpurple'/>
        <img src={Techwoman} alt="" className='lasttechwoman'/>
        <img src={Greenrectangle} alt="" className='lastgreenrectangle'/>
        <img src={Yellowcomment} alt="" className='lastyellowcomment'/>
      </div>
    </div>
  )
}

export default Home