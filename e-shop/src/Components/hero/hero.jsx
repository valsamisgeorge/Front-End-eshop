import React from 'react'
import './hero.css'
import hero_image from '../Assets/hero.jpg'
import arrow_icon from '../Assets/arrow.jpg'

const hero = () => {
  return (
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
              <div className="hand-hand-icon">
                  <p>new</p>
              </div>
              <p>collections</p>
              <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon}  width='10' height='10' alt="" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} width='500' height='650' alt=''/>
        </div>
      </div>
  )
}
 
export default hero
