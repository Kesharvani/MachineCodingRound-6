import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RestaurantContextProvider } from "./context/RestaurantContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <RestaurantContextProvider>
        <App />
      </RestaurantContextProvider>
    </BrowserRouter>
  </StrictMode>
);
