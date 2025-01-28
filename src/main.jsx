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
    domain="dev-zu5vvo188yq1gahv.us.auth0.com"
    clientId="YwZGironamZq4RvXGeJvZCmlZUuDa8KJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </CartProvider>
  </BrowserRouter>
);
