import "./App.css";
import DashBoard from "./containers/DashBoard";
import MessagePage from "./containers/MessagePage";
import LoginPage from "./containers/LoginPage";


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import SignupPage from "./containers/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="message" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
