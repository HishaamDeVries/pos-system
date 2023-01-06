import React, { Fragment } from "react";
import Header from "../Header";
import "./contact.css";

const About = () => {
  return (
    <Fragment>
      <Header />
      <h1 className="mb-3 text-center" style={{ color: "green" }}>
        Contact
      </h1>
      <div className="row">
        <div className="col-12 col-lg-6 text-center">
          <h3>Phone: 081 595 7849</h3>
          <h3>Whatsapp: 075 959 7802</h3>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <h3>
            Linkedin:
            <a
              href="https://www.linkedin.com/in/hishaam-de-vries-8b256a1a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin Profile Page
            </a>
          </h3>
          <h3>
            Github:
            <a
              href="https://www.linkedin.com/in/hishaam-de-vries-8b256a1a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile Page
            </a>
          </h3>
        </div>
      </div>

      <h3 className="mb-3 text-center">OR MESSAGE ME</h3>
      <form action="https://formspree.io/xpzyjbno" method="POST">
        <div className="form-group">
          <div className="row-md-6">
            <input
              type="text"
              name="name"
              className="form-control form-control-lg border"
              id="name"
              placeholder="Name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row-md-6">
            <input
              type="email"
              name="_replyto"
              className="form-control form-control-lg border"
              id="exampleFormControlInput1"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row-md-6  mx-auto">
            <textarea
              name="message"
              className="form-control form-control-lg border"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Write your message..."
              required
            />
          </div>
        </div>
        <div className="row row-md-6 mx-auto">
          <button type="submit" className="btn btn-primary pull-right mb-2">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default About;
