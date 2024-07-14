import React from 'react'
import './About.css'
import img1 from '../../assets/about/1.png';
import img2 from '../../assets/about/2.png';
import img3 from '../../assets/about/3.png';
import img4 from '../../assets/about/4.png';
import img5 from '../../assets/about/5.png';
import img6 from '../../assets/about/6.png';
import img7 from '../../assets/about/7.png';
import img8 from '../../assets/about/8.png';

const About = () => {
  return (
    <div className="container">
        <div className="content">
            <div className="about">About the Event</div>
            <div className="title">Bad Talks 2024 -</div>
            <div className="title">The CEO Summit</div>
            <div className="subtitle">SUMMMIT</div>
            <br/>
            <br/>
            <div className="expectations">
                <div class ="expect">What can you expect :</div>
                <ul>
                    <li><span className="highlight">* Engaging talks from 7 industry leaders</span></li>
                    <li>* Entrepreneurship, partnership, and business strategies</li>
                    <li>* Network opportunities on business strategies</li>
                    <li>* Insights from elite panels</li>
                    <li>* Expos, Q&A aspects</li>
                    <li><span className="highlight">* Explosive Q&A summaries</span></li>
                    <li>* Actionable takeaways for your business</li>
                </ul>
            </div>
            <div className="footer">Pression The Reas 2853</div>
        </div>
        <div className="speakers-container">
            <div className="speakers">
                <div className="row">
                    <div className="semi-circle">
                    <svg viewBox="0 0 150 75">
                        <path d="M 0 75 A 75 75 0 0 1 150 75" fill="none" stroke="cadetblue" stroke-width="1"/>
                        <path d="M 10 75 A 65 65 0 0 1 140 75" fill="none" stroke="cadetblue" stroke-width="1"/>
                        <path d="M 20 75 A 55 55 0 0 1 130 75" fill="none" stroke="cadetblue" stroke-width="1"/>
                        <path d="M 30 75 A 45 45 0 0 1 120 75" fill="none" stroke="cadetblue" stroke-width="1"/>
                        <path d="M 40 75 A 35 35 0 0 1 110 75" fill="none" stroke="cadetblue" stroke-width="1"/>
                        <path d="M 50 75 A 25 25 0 0 1 100 75" fill="none" stroke="cadetblue" stroke-width="1"/>
                        <path d="M 60 75 A 15 15 0 0 1 90 75" fill="none" stroke="cadetblue" stroke-width="1"/>
                        <path d="M 70 75 A 5 5 0 0 1 80 75" fill="none" stroke="cadetblue" stroke-width="1"/>
                    </svg>
                </div>
                    <div className="speaker" style={{ backgroundImage: `url(${img1})` }}></div>
                    <div className="speaker" style={{ backgroundImage: `url(${img2})` }}></div>
                </div>
                <div className="row">
                    <div className="speaker" style={{ backgroundImage: `url(${img3})` }}></div>
                    <div className="speaker" style={{ backgroundImage: `url(${img4})` }}></div>
                    <div className="speaker" style={{ backgroundImage: `url(${img5})` }}></div>
                </div>
                <div className="row">
                    <div className="speaker" style={{ backgroundImage: `url(${img6})` }}></div>
                    <div className="speaker" style={{ backgroundImage: `url(${img7})` }}></div>
                    <div className="speaker" style={{ backgroundImage: `url(${img8})` }}></div>
                </div>
            </div>
            <div className="semi-circles">
            </div>
        </div>
    </div>
  )
}

export default About