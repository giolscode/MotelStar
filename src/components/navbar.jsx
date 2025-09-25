

import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div>
          <a href="/" className="text-4xl font-bold text-yellow-600 hover:text-red-600 transition-colors">
            MotelStar
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#accueil" className="text-gray-700 font-bold hover:text-yellow-600 transition-colors"> Accueil </a>
          </li>
          <li>
            <a href="#apropos" className="text-gray-700 font-bold hover:text-yellow-600 transition-colors"> À propos </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 font-bold hover:text-yellow-600 transition-colors"> Services </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 font-bold hover:text-yellow-600 transition-colors"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}