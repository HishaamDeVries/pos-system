import React from "react";
import Trident from "../images/Trident.jpg";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div
    className="text-center"
    style={{ background: "lightblue", overflow: "hidden", height: "21vh" }}
  >
    <h1>
      <img
        className="img-fluid"
        style={{
          borderRadius: 50 + "%",
          height: 50 + "px",
          width: 50 + "px",
        }}
        src={Trident}
        alt="Trident Icon"
      />
      Trident Point of Sale System{" "}
    </h1>

    <ul className="nav-menu">
      <li className="lead">
        <Link to="/inventory">Inventory</Link>
      </li>
      <li className="lead">
        <Link to="/">CheckOut</Link>
      </li>
      <li className="lead">
        <Link to="/transactions">Transactions</Link>
      </li>
      <li className="lead">
        <Link to="/livecart">LiveCart</Link>
      </li>
      <li className="lead">
        <Link to="/about">About</Link>
      </li>
      <li className="lead">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <hr
      style={{
        color: "red",
        backgroundColor: "red",
        height: 5,
      }}
    />
  </div>
);

export default Header;
