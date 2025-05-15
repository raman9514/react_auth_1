import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router"
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MyApp</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <NavLink to={'/'} className={({ isActive }) =>`px-4 py-2 font-medium hover:text-blue-600 transition ${ isActive ? "text-blue-600 underline" : "text-gray-700"}`}>Home</NavLink> 
          <NavLink to={'/dashboard'} className={({ isActive }) =>`px-4 py-2 font-medium hover:text-blue-600 transition ${ isActive ? "text-blue-600 underline" : "text-gray-700"}`}>Dashboard</NavLink> 
          <NavLink to={'/login'} className={({ isActive }) =>`px-4 py-2 font-medium hover:text-blue-600 transition ${ isActive ? "text-blue-600 underline" : "text-gray-700"}`}>Login</NavLink> 
          <NavLink to={'/register'} className={({ isActive }) =>`px-4 py-2 font-medium hover:text-blue-600 transition ${ isActive ? "text-blue-600 underline" : "text-gray-700"}`}>Register</NavLink> 
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
            <Link to={'/'} className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to={'/dashboard'} className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
            <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/register" className="block text-gray-700 hover:text-blue-600">Register</Link>
        </nav>
      )}
    </header>
  ); 
};

export default Header;
