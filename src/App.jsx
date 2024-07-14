import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./component/AboutUs/About";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import EventDetails from "./component/EventDetails/EventDetails";
import WhatIsBad from "./component/Whatisbad/WhatIsBad";
import Slide from "./component/team/Slide";
import RegisterForm from "./component/RegisterForm/RegisterForm";
import "./App.css";
import Speakers from "./component/Speakers/Speakers";
import Ticket from "./component/Ticket/Ticket";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("section, img:not(.no-fade)");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <EventDetails />
              <WhatIsBad />
              <Speakers/>
              <Slide />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="#about" element={<About />} />
        <Route path="#speakrs" element ={<Speakers/>} />
        <Route path="#whatIsAbout" element={<WhatIsBad />} />
        <Route path="#team" element={<Slide />} />
        <Route path="#footer" element={<Footer />} />
        <Route path="/ticket" element={<Ticket />} />

        <Route path="/ticket/:id" element={<Ticket />} />
 
      </Routes>
    </div>
  );
}

export default App;
