import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #6a11cb, #2575fc)",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>
        Vidyapeeth Library
      </div>
      <div style={{ margin: "5px 0" }}>
        123 Library Lane, College Campus, Your City
      </div>
      <div style={{ marginTop: "5px", fontSize: "0.9rem" }}>
        📞 Contact: +91 9876543210 | ✉️ Email: info@vidyapeethlibrary.com
      </div>
      <div style={{ marginTop: "10px", fontSize: "0.8rem" }}>
        &copy; {new Date().getFullYear()} Vidyapeeth Library. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
