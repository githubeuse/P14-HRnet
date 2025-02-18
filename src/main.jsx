import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/store.js";
import "./main.css";
import App from "./App.jsx";
import EmployeesList from "./pages/EmployeesList/EmployeesList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/EmployeesList" element={<EmployeesList />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
