import React from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./Inventory/Items";
import CheckOut from "./Pos/CheckOut";
import Transactions from "./Transactions/Transactions";
import LiveCart from "./LiveCart/LiveCart";
import Contact from "./Contact/Contact";
import About from "./About/About";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CheckOut} />
      <Route path="/inventory" component={Items} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/livecart" component={LiveCart} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);

export default Main;
