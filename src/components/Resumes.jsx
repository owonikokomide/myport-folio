import React from "react";

const Resume = () => {
  return (
    <a href="/resume.pdf" download="resume.pdf">
      <button style={{ padding: "1.4rem",marginTop: "1.5rem", backgroundColor: "#fad390", fontSize: "1.2rem", color: "black", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Download Resume
      </button>
    </a>
  );
};

export default Resume;
