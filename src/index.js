import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App/App.js";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-y-5438uj.us.auth0.com"
    clientId="A6xVWvisvylEDCS2dOfwjQPZ96ZXQnrf"
    redirectUri={`${window.location.origin}/home`}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
