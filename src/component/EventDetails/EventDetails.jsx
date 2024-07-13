import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventDetails.css";
import event from "../../assets/trial2badtalkshomepage.png"

function EventDetails() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <section className="event_details">
      {/* <div className="breakdown">
        <h1>
          BREAKDOWN <span className="analysis">ANALYSIS</span>
        </h1>
        <h1 className="decision">DECISION</h1>
      </div> */}
      <img src={event} alt="Event" />
     <div className="venue">
     <p>
        <b>Event Venue</b> - Audi-2 IPS Academy Rajendra Nagar, Indore
      </p>
      <p>
        <b>Event Date</b> - 08 August 2024
      </p>
     </div>
      
      {/* <button onClick={handleRegister} class="button"><span>Register </span></button> */}
      <div className="registration">
      <p >Registration coming soon..</p>
      </div>
    </section>
  );
}

export default EventDetails;
