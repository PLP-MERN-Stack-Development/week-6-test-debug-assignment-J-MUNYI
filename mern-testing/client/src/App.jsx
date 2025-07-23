import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBug from "./pages/CreateBug";
import BugDetails from "./pages/BugDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBug />} />
            <Route path="/bug/:id" element={<BugDetails />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
