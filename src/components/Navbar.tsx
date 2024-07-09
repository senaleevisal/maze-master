"use client";
import Link from "next/link";
import Image from "next/image"
import { useEffect } from "react";
import { Hero } from "./Hero";

export const Navbar = () => {
  const navigation = [
    { name: "Home", herf: "#home", },
    { name: "About", herf: "#about" },
    { name: "Contact", herf: "#contact" },
    { name: "Gallery", herf: "#gallery" }
  ];

  return (
    <div className="w-full">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/img/logo.png" alt="Flowbite Logo" width={80} height={80} className="md:scale-75 sm:scale-50" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Maze Master</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-6 py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hidden md:block">
                Register Here
              </a>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden md:hidden lg:block w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navigation.map((SectionTitle,id)=>(
                <li key={id}>
                  <Link href={SectionTitle.herf}>
                    <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{SectionTitle.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

function isBrowser() {
  throw new Error("Function not implemented.");
}

