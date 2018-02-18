import React, { Component } from 'react';
import './../styles/landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <header className="hero-content">
          <h1 className="hero-title">Turn up the Ted!</h1>
        </header>
        <section className="selling-points container clearfix">
          <div className="arrow"><div className='left'></div><div className='right'></div></div>
          <div className="point column third">
            <span className="ion-music-note"></span>
            <h5 className="point-title">Only Ted</h5>
            <p className="point-description">Why listen to anything else?</p>
          </div>
          <div className="point column third">
            <span className="ion-radio-waves"></span>
            <h5 className="point-title">Unlimited streaming, ad-free</h5>
            <p className="point-description">Tune out the real world</p>
          </div>
          <div className="point column third">
            <span className="ion-iphone"></span>
            <h5 className="point-title">Mobile enabled</h5>
            <p className="point-description">Text and drive: 240-271-7135</p>
          </div>
        </section>
        <script src="scripts/landing.js"></script>
        <script src="scripts/utilities.js"></script>
      </div>
    );
  }
}

export default Landing;
