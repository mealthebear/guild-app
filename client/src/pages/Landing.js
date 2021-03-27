import React, { useEffect, useState } from 'react';

const Landing = () => {
  return (
    <div>
      <div className="heading-landing-container">
      <img className="header-image" src="./images/wow-cat.jpg" />
      <div className="heading-landing-text-box">
        <h2 className="heading heading-landing">Hello, we are Défiance</h2>
        <p className="heading-landing-text">
          We're a nifty little guild on Alexstrasza / Terokkar. 
          Interested in raiding with us?
          Click the button on the right!
        </p>
      </div>
    </div>
    </div>
  )
}

export default Landing;
