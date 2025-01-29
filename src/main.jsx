import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
    <Auth0Provider
    domain="dev-qmkp7l48xsk37bp4.us.auth0.com"
    clientId="2t1zvfmnt73B2F3cJtjNbx57Yi0liIxO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
    </CartProvider>
  </BrowserRouter>
);
