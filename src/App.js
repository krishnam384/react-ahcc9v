import React from "react";
import { Home } from "./Home/Home";
import { NotesPage } from "./components/NotesRoute/NotesPage";
import { HomePage } from "./components/HomeRoute/HomePage";
import { ContactPage } from "./components/ContactRoute/ContactPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./style.css";

export default function App() {
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Home /> */}

      <Router>
        <Switch>
          <Route exact path="/" component={NotesPage} />
          <Route path="/contact" component={ContactPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}
