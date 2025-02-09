import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/store.js";
import "./index.css";
import App from "./App.jsx";
import EmployeesList from "./pages/employeesList/employeesList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/employeesList" element={<EmployeesList />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
