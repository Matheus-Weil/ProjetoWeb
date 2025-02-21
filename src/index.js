/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import Cadastro from "views/Cadastro.jsx";
import Login from "views/Login.jsx";
import Dashboard from "views/Dashboard.jsx";
import Veiculo from "views/Veiculo.jsx";
import NovaPostagem from "views/NovaPostagem.jsx";
import Rota from "views/Rota.jsx";

import ProfilePage from "views/examples/ProfilePage.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
	  <Route
        path="/cadastro"
        render={props => <Cadastro {...props} />}
      />
      <Route
        path="/login"
        render={props => <Login {...props} />}
      />
	  <Route
        path="/dashboard"
        render={props => <Dashboard {...props} />}
      />
	  <Route
        path="/veiculo"
        render={props => <Veiculo {...props} />}
      />
	  <Route
        path="/NovaPostagem"
        render={props => <NovaPostagem {...props} />}
      />
	  <Route
        path="/Rota"
        render={props => <Rota {...props} />}
      />
      
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
