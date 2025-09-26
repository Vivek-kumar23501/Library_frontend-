import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #1a237e, #3949ab)", // deep professional gradient
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {/* Library Name */}
        <div style={{ flex: "1 1 300px", marginBottom: "15px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px" }}>Vidyapeeth Library</h2>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
            Near Rlsy College Bettiah<br />Bettiah, Bihar - 845438
          </p>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 300px", marginBottom: "15px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "10px" }}>Contact</h3>
          <p style={{ fontSize: "0.9rem", margin: "5px 0" }}>📞 +91 8002115258</p>
          <p style={{ fontSize: "0.9rem", margin: "5px 0" }}>✉️ vidyapeethclassesbth@gmail.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ marginTop: "30px", fontSize: "0.85rem", color: "#ccc" }}>
        &copy; {new Date().getFullYear()} Vidyapeeth Library. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
