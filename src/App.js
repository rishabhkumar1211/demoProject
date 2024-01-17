import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Your components for different routes
import SignIn from "./screens/AuthScreen/SignIn";
import NotFound from "./components/NotFound";
import UserRequest from "./screens/UserRequest/UserRequest";
import Account from "../src/screens/UserRequest/Account";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/user-request" element={<UserRequest />} />
        <Route path="/user-request/Account" element={<Account />} />
        {/* The NotFound component handles routes that don't match */}
        <Route path="/" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
