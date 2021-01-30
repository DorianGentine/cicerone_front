import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Page from "./routes/pagesRouter"
import Navbar from "./components/navbar"

export default function ParamsExample() {
  return (
    <Router>
        <Navbar></Navbar>

        <Switch>
          <Route path="/:id" children={<Page />} />
          <Redirect from="/" to="/accueil" />
        </Switch>
    </Router>
  );
}