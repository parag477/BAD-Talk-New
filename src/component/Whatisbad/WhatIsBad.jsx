import React from 'react'
import './WhatisBad.css';
import Img1 from '../../assets/bad-1.jpeg'
import Img2 from '../../assets/bad-2.jpeg'
import Img3 from '../../assets/bad-3.avif'
import Img4 from '../../assets/bad-4.jpg'

const WhatisBad = () => {
  return (
    <div>
        <div className="top">
            <h3 className='why-attend'>WHY ATTEND</h3>
            <h1 className="main-head">WHAT'S IN IT BAD FOR STUDENTS?</h1>
            <h3>BENEFITS FOR STUDENTS</h3>
            <div className="separator">
                <hr/>
                <h3 className="line">BENEFITS FOR STUDENTS</h3>
                <hr/>
            </div>
        </div>
        <div className="images">
            <div className="image">
                <img src={Img1} alt="Image 1" className="circle" />
                <p className="desc">INTERNSHIP OPPORTUNITIES WITH LEADING COMPANIES</p>
            </div>
            <div className="image">
                <img src={Img2} alt="Image 1" className="circle" />
                <p className="desc">GAIN REAL-TIME INDUSTRY INSIGHTS</p>
            </div>
            <div className="image">
                <img src={Img3} alt="Image 1" className="circle" />
                <p className="desc">ENJOY REFRESHMENTS AND SNACKS</p>
            </div>
            <div className="image">
                <img src={Img4} alt="Image 1" className="circle" />
                <p className="desc">ATTEND MOTIVATIONAL SESSIONS</p>
            </div>
        </div>
    </div>
  )
}

export default WhatisBad;