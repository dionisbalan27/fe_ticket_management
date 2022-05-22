import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Register from "./containers/Register";
import Login from "./containers/Login";
import TicketList from "./containers/TicketList";

function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
    <a href="/tickets" className="navbar-brand">
    Cinema2an
    </a>
    </nav>

    <div className="container mt-3">
    <Switch>
    <Route path="/tickets" component={TicketList} />
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    </Switch>
    </div>
    </Router>
    );
  }

  export default App;
