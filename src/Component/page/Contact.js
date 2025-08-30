import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Contact Us</h1>
      <p>
        Got a question or idea? Fill out the form below, and we’ll get back to
        you as soon as possible. 🚀
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            rows="5"
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 15px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <h2>Other ways to reach us:</h2>
        <p>📧 Email: support@ourwebsite.com</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📍 Address: 123, Tech Street, Bangalore, India</p>
      </div>
    </div>
  );
}

export default Contact;
