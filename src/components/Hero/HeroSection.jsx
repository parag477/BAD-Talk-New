import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/ceoImg.png"; // Replace with your image path

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-headline">
          BAD <span className="hero-highlight">Talks 2024</span>
        </h1>
        <h1 className="hero-headline-2">
          The CEO Summit :
        </h1>
        <p className="hero-subheadline">The Ultimate Business And Experience</p>
        
        <div className="hero-event-details">
          <p><span className="hero-label">Date : </span> August 8, 2024</p>
          <div className="hero-vertical-line"></div>
          <p><span className="hero-label">Venue : </span>Audi-2, Premium Audi</p>
          <div className="hero-vertical-line"></div>
          <p><span className="hero-label">Location : </span>IPS Academy, Rajendra Nagar, Indore</p>

          <div className="hero-image12">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
        <p className="hero-description">
          Join us for a transformative event where the brightest business minds
          share their journeys, challenges, and strategies for success. Network
          with industry leaders and elevate your business skills.
        </p>
        <button className="hero-button">
          <span>Reserve Your Spot Now</span>
        </button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default HeroSection;