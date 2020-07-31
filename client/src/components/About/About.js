import React, { Fragment } from "react";
import Header from "../Header";

export const About = () => {
  return (
    <Fragment>
      <Header />
      <h2 className="text-center" style={{ color: "green" }}>
        About this App
      </h2>
      <h3 className="text-center">
        This App is Point of Sale System built for self-own to small Business
        Use
      </h3>
      <h3 className="text-center">Version: 1.0.0</h3>
      <h3 className="text-center">Database Used: NeDB</h3>
    </Fragment>
  );
};

export default About;
