import React, { useState } from "react";

import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import WhatsApp from "../assets/whatsapp.png";
import Location from "../assets/location.png";
import './Contact.css'

export default function Contact() {

const [name, setName] = useState("");
const [mail, setMail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");

const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (!name || !mail || !subject || !message) {
    setError("Please fill all the fields.");
    return;
  }
  setSuccess("Message sent successfully!");
  setName("");
  setMail("");
  setSubject("");
  setMessage("");
};

  return (
    <div className="contactPage">
      <div className="contactDetails">
        <h2>Get in Touch</h2>
        <div className="contactItem">
          <img src={Email} alt="Email" />
          <div>
            <h4>Email</h4>
            <a href="mailto:kiruthisekar97@gmail.com">abc@gmail.com</a>
          </div>
        </div>

        <div className="contactItem">
          <img src={WhatsApp} alt="WhatsApp" />
          <div>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/919087762206" target="_blank" rel="noreferrer">
              +91 9876543210
            </a>
          </div>
        </div>

        <div className="contactItem">
          <img src={Phone} alt="Phone" />
          <div>
            <h4>Phone</h4>
            <a href="tel:+919087762206">+91 9087762206</a>
          </div>
        </div>

        <div className="contactItem">
          <img src={Location} alt="Location" />
          <div>
            <h4>Location</h4>
            <a href="https://www.google.com/maps/search/?api=1&query=Salem,Tamil Nadu"
              target="_blank"
              rel="noreferrer"
            >
              Salem, Tamil Nadu
            </a>
          </div>
        </div>

      </div>

      <div className="textContainer">
        <h2>Let's Work Together</h2>
        <form onSubmit={handleSubmit}>

          {error && (
            <p className="errorMessage">
              {error}
            </p>
          )}
        
          {success && (
            <p className="successMessage">
              {success}
            </p>
          )}
        
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        
          <input
            type="email"
            placeholder="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        
          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}