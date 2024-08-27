import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("message sent!");
    document.getElementById("contact-form").reset();
  };

  return (
    <div className="contact-page-wrapper">
      <div className="about-me-container">
        <h1>Contact Us!</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-piece">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>

          <div className="contact-form-piece">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>

          <div className="contact-form-piece">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="contact-form-piece">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
