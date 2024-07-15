import React from "react";
import "./About.css";
import logo from "../../assets/BAD_video.mp4";

export default function About() {
  return (
    <section className="AboutUsContainer" id="About">
      <h1 className="font">About Event</h1>
      <div className="AboutUsInnerContainer">
        <div className="content">
          <br />
          <br />
          <div className="expectations">
            <div className="expect">What can you expect :</div>
            <ul>
              <li>
                <span className="highlight">
                  * Engaging talks from 7 industry leaders
                </span>
              </li>
              <li>* Entrepreneurship, partnership, and business strategies</li>
              <li>* Network opportunities on business strategies</li>
              <li>* Insights from elite panels</li>
              <li>* Expos, Q&A aspects</li>
              <li>
                <span className="highlight">* Explosive Q&A summaries</span>
              </li>
              <li>* Actionable takeaways for your business</li>
            </ul>
          </div>
        </div>
        <div className="AboutUs">
          <video width="560" height="315" controls autoPlay muted loop>
            <source src={logo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
