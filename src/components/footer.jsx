import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-4 shadow-inner fixed bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-xl font-bold text-yellow-600"> MotelStar </h2>

        <p className="text-l text-gray-500 mt-3 md:mt-0 font-bold ">
          © {new Date().getFullYear()} MotelStar. Tous droits réservés.
        </p>

        <ul className="flex space-x-6 mt-3 md:mt-0">
          <li><a href="https://www.linkedin.com/in/giovanni-losat-a72a33328/" className="hover:text-indigo-500"> LinkedIn </a></li>
          <li><a href="https://github.com/giolscode" className="hover:text-indigo-500"> GitHub </a></li>
        </ul>

      </div>
    </footer>
  );
}