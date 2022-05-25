import React from "react";
import logo from "../Images/logo.svg";

export default function Navbar2() {
  return (
    <div className="text-white">
      <div className="flex md:block">
        <div className="flex max-w-7xl border borde-blue-400 justify-center md:justify-between mx-auto items-center p-4">
          {/* PRIMARY NAV */}
          <div className="flex items-center space-x-4">
            <img src={logo} className="h-12 w-12" />
            <h1 className="px-4 text-4xl text-white font-mono">
              Data Los Ríos
            </h1>
          </div>
          {/* SECONDARY NAV */}
          <div className=" hidden md:flex flex-row justify-center items-center space-x-8">
            {/* First section */}
            <div className="flex flex-row items-center">
              <a href="/" className="px-2 text-white">
                Inicio
              </a>
              <a href="/region" className="px-2 text-white">
                Región
              </a>
              <a href="/cities" className="px-2 text-white">
                Ciudades
              </a>
            </div>
            {/* Secondary Section */}
            <div className="w-0.5 h-6 bg-gray-400 opacity-50"></div>
            <button className="bg-blue-800 hover:bg-brand-button rounded-xl px-4 py-2">
              <a href="/simulation" className="text-white">
                Simulación
              </a>
            </button>
          </div>
        </div>
        {/* MENU BUTTON */}
        <div className="items-center md:hidden mr-10 ">
          <button className="h-24">
            <i className="fas fa-bars fa-xl" />
          </button>
        </div>
      </div>
      {/* MOBILE MENU*/}
      <div className="flex md:hidden flex-col space-y-1 py-4">
        <a href="#"> Link 1</a>
        <a href="#"> Link 1</a>
        <a href="#"> Link 1</a>
        <a href="#"> Link 1</a>
      </div>
    </div>
  );
}
