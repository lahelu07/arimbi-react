import React from "react";
import { useState, useEffect } from "react";
import logo from "../img/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-10  transition-colors duration-300 ${
        isScrolled ? " bg-purple-700" : "bg-black bg-opacity-50"
      }`}
    >
      <div className=" text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <div className=" flex">
          <div class="w-[75px] my-auto">
            <img
              src={logo}
              alt="ukdc"
              class="px-1
        "
            />
          </div>
          <div class="ml-4 my-auto ">
            <p class="text-[20px] font-bold">Arimbi</p>
            <div class="text-[10px] font-medium">Aplikasi Research dan</div>
            <div className=" text-[10px] font-medium ">
              Pengabdian masyarakat
            </div>
          </div>
        </div>
        <ul className=" flex items-center gap-7  ">
          <li className=" hover:text-yellow-500 "> Home </li>
          <li className=" hover:text-yellow-500 "> Tentang Arimbi </li>
          <li className=" hover:text-yellow-500 "> Jadwal </li>
          <li className=" hover:text-yellow-500 "> Pengumuman </li>
          <button
            type="button"
            class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 text-center py-1 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
