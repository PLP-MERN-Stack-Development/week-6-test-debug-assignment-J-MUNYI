import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-lg">Bug Tracker</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/create" className="hover:underline">Report Bug</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
