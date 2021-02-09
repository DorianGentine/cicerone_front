import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AdminPagesRouter from "../routes/adminPagesRouter"


function Admin() {  
  const root = "/admin"

  return(
    <Router>
      <div className="_p-admin">
        <div className="admin-menu">
          <Link to={`${root}/region`}>Régions</Link>
          <Link to={`${root}/alcohol_title`}>alcohol_titles</Link>
          <Link to={`${root}/beer_category`}>beer_categories</Link>
          <Link to={`${root}/beer_color`}>beer_colors</Link>
          <Link to={`${root}/bitterness`}>bitterness</Link>
          <Link to={`${root}/beer_type`}>beer_types</Link>
        </div>

        <Switch>
          <Route path={`${root}/:admin_id`} children={<AdminPagesRouter />} />
        </Switch>
      </div>
    </Router>
  );
};

export default Admin;
