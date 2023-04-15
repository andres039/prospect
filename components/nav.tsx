import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("hidden");
  const openBurger = () => {
    openMenu === "hidden" ? setOpenMenu("") : setOpenMenu("hidden");
  };
  return (
    <nav className=" border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-400">
          Andr&eacute;s Beltr&aacute;n
        </span>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={openBurger}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${openMenu} text-center w-full md:block md:w-auto `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-whitebg-gray-800 md:bg-gray-900 border-gray-700">
            <Link
              href="about"
              className=" md:hover:text-blue-500 hover:bg-gray-100 block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 text-white "
            >
              About
            </Link>
            <Link
              href="projects"
              className="block py-2 pl-3 pr-4  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              Projects
            </Link>

            <Link
              href="contact"
              className="block py-2 pl-3 pr-4  rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
