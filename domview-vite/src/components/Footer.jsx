import React from "react";

// src/components/Footer.jsx

const Footer = () => (
    <footer style={{
        textAlign: "center",
        padding: "1rem",
        background: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 100
    }}>
        © {new Date().getFullYear()} DOMView. All rights reserved.
    </footer>
);

export default Footer;