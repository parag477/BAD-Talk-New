import React, { useEffect } from "react";
import "./About.css";
import logo from "./assets/badmean.jpg";

export default function About() {
  useEffect(() => {
    // Add class to show AboutUsText after component mounts
    const aboutUsText = document.querySelector(".AboutUsText");
    aboutUsText.classList.add("visible");
  }, []);

  return (
    <section className="AboutUsContainer" id="About">
      <h1 className="font">About Us</h1>
      <div className="AboutUsInnerContainer">
        <div className="AboutUs">
          <img src={logo} className="image" alt="About Us" />
        </div>
        <div className="AboutUs">
          {/* <p className="AboutUsHeading">HEADING</p> */}
          <p className="AboutUsText">
            Our mission is to empower students by providing mentorship,
            experiential learning, and meaningful connections. With over 8000
            students, we prioritize hands-on experience through expert sessions,
            offering invaluable insights and practical exposure. BAD Business
            guides students on their self-discovery journey, helping them make
            informed decisions and grow personally. <br /> Benefits of
            Participating in B.A.D. Talks - When you participate in the event,
            you will gain access to a vibrant community of like-minded
            individuals. Networking opportunities Live projects and free
            resources to enhance your skills and elevate your portfolio. We
            believe in the keys to successful youth: passion, resilience,
            continuous learning, and practical exposure. Join us to confidently
            navigate your path to success!
          </p>
        </div>
      </div>
    </section>
  );
}
