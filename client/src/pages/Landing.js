import React, { useEffect, useState } from 'react';

const Landing = () => {
  return (
    <>
      <section className="heading-landing-container">
        <img className="header-image" src="./images/wow-cat.jpg" />
        <div className="heading-landing-text-box">
          <h2 className="heading heading-landing">Hello, we are Défiance</h2>
          <div>
            <p className="heading-landing-text">
              We're a nifty little guild on Alexstrasza / Terokkar (US). 
              Interested in raiding with us?
              Click the button on the right!
            </p>
            <button className="heading-landing-button" type="button">Message Us!</button>
          </div>
        </div>
      </section>
      <section className="bio-container">
        <h2 className="subheading subheading-bio">About Us</h2>
        <p className="bio-text">
          Défiance is an original guild dating back to the beginnings of WoW.
          Over the years, we have maintained a constant raiding presence.
          Outside of raiding, our guild hosts a community of players who
          take part in Mythic+ as well as some PvP.
        </p>
        <p className="bio-text">
          If you're interested in joining, feel free to drop us a line 
          down below!
        </p>
      </section>
    </>
  )
}

export default Landing;
