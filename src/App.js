import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Your components for different routes
import SignIn from "./screens/AuthScreen/SignIn";
import NotFound from "./components/element/NotFound";
import UserRequest from "./screens/UserRequest/UserRequest";
import Account from "./screens/Account/Account";
import Notification from "./screens/Notification/Notification";
import History from "./screens/Account/HistoryTable";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/user-request" element={<UserRequest />} />
        <Route path="/user-request/Account" element={<Account />} />
        <Route
          path="/user-request/Account/documents/history"
          element={<History />}
        />
        <Route path="/notification" element={<Notification />} />
        {/* The NotFound component handles routes that don't match */}
        <Route path="/" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
