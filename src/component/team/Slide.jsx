import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css"; // Import your custom CSS file



import image1 from "../../assets/image1.jpg";

import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image3 from "../../assets/image3.jpg";

// import image11 from "./assets/image11.jpg";
// import image12 from "./assets/image12.jpg";
// import image15 from "./assets/image15.jpg";

// {Lead team}
import Aniket from "../../assets/Lead/Aniket Singh.jpg";
import Deeksha from "../../assets/Lead/deeksha jain.png";

// {tech team}
import Bharat from "../../assets/Tech/Bharat.jpg";
import Ravi from "../../assets/Tech/Ravi.jpg";
import Shivanshi from "../../assets/Tech/Shivanshi.jpg";

// management team
import Tanisha from "../../assets/Management/Tanisha.jpg";
import Shrishti from "../../assets/Management/Shrishti.jpg";
import Shubh from "../../assets/Management/Shubh.jpg";
import Sakshi from "../../assets/Management/Sakshi.jpg";
import Ashley from "../../assets/Management/Ashley.png";
import Shreya from "../../assets/Management/Shreya.jpg";

// Design Team
import Aadeesh from "../../assets/Design_Video/Aadeesh Singhai.jpg";
import Anjali from "../../assets/Design_Video/Anjali Shukla.jpg";
import Meet from "../../assets/Design_Video/Meet.jpg";
import jeny from "../../assets/Design_Video/Jeny Jain.jpg";
import tanishq from "../../assets/Design_Video/tanishq.png";

// Curation and marketing
import khushi from "../../assets/Curation_Marketing/Khushi.jpg";
import Sonali from "../../assets/Curation_Marketing/SONALI.jpg";
import Aditya from "../../assets/Curation_Marketing/Aditya.jpg";
import Somya from "../../assets/Curation_Marketing/Somya.jpg";
import Bhuvneshwari from "../../assets/Curation_Marketing/Bhuvneshwari.jpg";

// Social media team
import Devanshi from "../../assets/Social/Devanshi.jpg";
import Sanjeet from "../../assets/Social/Sanjeet.jpg";
import Savan from "../../assets/Social/Savan.jpg";

// decoration
import image8 from "../../assets/image8.jpg";

const Slide = () => {
  const Lead = [
    { Name: "Parag Agrawal", img: image3 },
    { Name: "Devesh Gurjar", img: image1 },
    { Name: "Aniket Singh", img: Aniket },
    { Name: "Deeksha jain", img: Deeksha },
    { Name: "Anant Pawar", img: image5 },
  ];

  const TechTeamData = [
    { Name: "Bharat Khatwani", img: Bharat },
    { Name: "Shivanshi Gupta", img: Shivanshi },
    { Name: "Ravi Gautam", img: Ravi },
    { Name: "Aditya", img: image4 },
    { Name: "Palak", img: image5 },
  ];

  const Event_management_team_data = [
    { Name: "Tanisha Dhakad", img: Tanisha },
    { Name: "Shrishti Arya", img: Shrishti },
    { Name: "Shubh Jain", img: Shubh },
    { Name: "Ashley ", img: Ashley },
    { Name: "Sakshi Sharam", img: Sakshi },
    { Name: " Shreya tiwari", img: Shreya },
    { Name: "Poonam Mewada", img: image6 },
  ];

  const designTeamData = [
    { Name: "Tanishq Thakur", img: tanishq },
    { Name: "Meet Yaduwanshi", img: Meet },
    { Name: "Aadeesh Singhai", img: Aadeesh },
    { Name: "Anjali Shukla", img: Anjali },
    { Name: "Jeny Jain", img: jeny },
  ];
  const Marketing_Curation = [
    { Name: "Sonali Singh", img: Sonali },
    { Name: "Khushi Nikam", img: khushi },
    { Name: "Somya Kinker", img: Somya },
    { Name: "Aditya Joshi", img: Aditya },
    { Name: "Bhuvneshwari Batham", img: Bhuvneshwari },
  ];

  // Social media team
  // 1. Savan lovanshi
  // 2. Sanjeet singh dhadoriya
  // 3. Devanshi nema
  // Decoration team
  // 1. Anushka meena
  const Social_Decoration_team = [
    { Name: "Savan lovanshi", img: Savan },
    { Name: " Sanjeet singh dhadoriya", img: Sanjeet },
    { Name: "Devanshi nema", img: Devanshi },
    { Name: "Anushka meena", img: image8 },
    { Name: "Other", img: image6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="team">
      <h1 className="heading">Our Team</h1>
      <div>
        {/* Tech Team Section */}
        <div className="card">
          <h2 className="team-heading tech-team-heading">Lead Team</h2>
          <div className="inside">
            <Slider {...settings}>
              {Lead.map((d, index) => (
                <div key={index} className="custom-card">
                  <div className="custom-image-container">
                    <img src={d.img} alt={d.Name} className="custom-image" />
                  </div>
                  <div className="additional-content">
                    <p>{d.Name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* tech Team Section */}
        <div className="card">
          <h2 className="team-heading">Tech Team</h2>
          <div className="inside">
            <Slider {...settings}>
              {TechTeamData.map((d, index) => (
                <div key={index} className="custom-card">
                  <div className="custom-image-container">
                    <img src={d.img} alt={d.Name} className="custom-image" />
                  </div>
                  <div className="additional-content">
                    <p>{d.Name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Event management team  Section */}
        <div className="card">
          <h2 className="team-heading">Event Management team</h2>
          <div className="inside">
            <Slider {...settings}>
              {Event_management_team_data.map((d, index) => (
                <div key={index} className="custom-card">
                  <div className="custom-image-container">
                    <img src={d.img} alt={d.Name} className="custom-image" />
                  </div>
                  <div className="additional-content">
                    <p>{d.Name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Design Team Section */}
        <div className="card">
          <h2 className="team-heading">Design & Video Editing Team</h2>
          <div className="inside">
            <Slider {...settings}>
              {designTeamData.map((d, index) => (
                <div key={index} className="custom-card">
                  <div className="custom-image-container">
                    <img src={d.img} alt={d.Name} className="custom-image" />
                  </div>
                  <div className="additional-content">
                    <p>{d.Name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Other Team Section */}
        <div className="card">
          <h2 className="team-heading">Marketing & Curation team</h2>
          <div className="inside">
            <Slider {...settings}>
              {Marketing_Curation.map((d, index) => (
                <div key={index} className="custom-card">
                  <div className="custom-image-container">
                    <img src={d.img} alt={d.Name} className="custom-image" />
                  </div>
                  <div className="additional-content">
                    <p>{d.Name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="card">
          <h2 className="team-heading">Social & Decoration </h2>
          <div className="inside">
            <Slider {...settings}>
              {Social_Decoration_team.map((d, index) => (
                <div key={index} className="custom-card">
                  <div className="custom-image-container">
                    <img src={d.img} alt={d.Name} className="custom-image" />
                  </div>
                  <div className="additional-content">
                    <p>{d.Name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
