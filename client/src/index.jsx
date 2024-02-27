import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import App from "./App";
import { StudentsProvider } from "./context/studentsContext";
import { PairsProvider } from "./context/pairsContext";
import { AuthProvider } from "./context/authContext";



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <BrowserRouter>
    <AuthProvider>

      <PairsProvider>
        <StudentsProvider>
          <App />
        </StudentsProvider>
      </PairsProvider>
    </AuthProvider>
      
    </BrowserRouter>
  </>
);
