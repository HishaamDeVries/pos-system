import React from "react";
import Header from "../Header";

export const About = () => {
  return (
    <div
      style={{ background: "#D8BFD8", overflow: "visible", height: "100vh" }}
    >
      <Header />
      <h2 className="text-center" style={{ color: "green" }}>
        About this App
      </h2>
      <h3 className="text-center">
        This App is a Point of Sale System built for small self-own to normal
        small businesses Use
      </h3>
      <h3 className="text-center">Version: 1.0.0</h3>
      <h3 className="text-center">Database Used: NeDB</h3>
    </div>
  );
};

export default About;
