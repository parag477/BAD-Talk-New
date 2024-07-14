import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeName: "",
    year: "",
    why: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Implement logic to handle form submission (e.g., send data to backend)
  };

  useEffect(() => {
    document.querySelectorAll("label").forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, i) =>
            `<span style="transition-delay:${i * 0}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="navUp">
          <h2>Register</h2>
          <p className="X" onClick={handleClose}>X</p>
        </div>
        <div className="inputBox">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name:&nbsp;</label>
        </div>

        <div className="inputBox">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:&nbsp;</label>
        </div>

        <div className="inputBox">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone Number:</label>
        </div>

        <div className="inputBox">
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
          <label htmlFor="collegeName">College Name:</label>
        </div>

        <div className="inputBox">
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min={1}
            max={4}
            required
          />
          <label htmlFor="year">Year:&nbsp;</label>
        </div>

        <div className="inputBox">
          <input
            type="text"
            id="why"
            name="why"
            value={formData.why}
            onChange={handleChange}
            required
          />
          <label htmlFor="why">Why &nbsp;do&nbsp; you&nbsp; want&nbsp; to&nbsp; register?</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
