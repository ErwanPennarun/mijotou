import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="height-[20vh] mx-auto mt-10 lg:w-11/12 pt-3 grid grid-cols-12 ">
        <div className="flex items-center lg:w-11/12 lg:ml-4 z-40 col-span-3 ">
          <Link href="/">
            <Image
              src="/img/mijotou-head.png"
              width="100%"
              height="100%"
              alt="Mijotou logo"
            />
          </Link>
          <Link href="/">
            <p className="text-4xl ml-6 text-main-red border-r border-1">
              Mijotou
            </p>
          </Link>
        </div>
        <div className="col-start-4  col-span-4 self-center">
          <Search />
        </div>

        <div className="flex w-full justify-end items-center col-span-3 col-start-10 ">
          <section className="flex mr-6 lg:hidden">
            <div
              className="space-y-1 z-40 cursor-pointer"
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              <span
                className={`block h-0.5 w-7  rounded-xl bg-gray-600 ${
                  navbarOpen
                    ? "rotate-45 duration-300 ease-in-out translate-y-0.5"
                    : "duration-300 ease-in-out"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 rounded-xl  bg-gray-600 ${
                  navbarOpen ? "hidden" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-7  rounded-xl bg-gray-600 ${
                  navbarOpen
                    ? "-rotate-45 -translate-y-1 duration-300 ease-in-out"
                    : "duration-300 ease-in-out"
                }`}
              ></span>{" "}
            </div>

            <div
              className={`block absolute w-full h-auto top-0 left-0 bg-white z-10 flex drop-shadow-md ${
                navbarOpen
                  ? "translate-y-0 duration-500 ease-in-out "
                  : "absolute translate-y-[-600px] duration-500"
              }`}
            >
              <div className="w-full">
                <ul className="flex flex-col items-center justify-around min-h-[600px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link href="/recettes">Recette</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link href="/pratique">Pratique</Link>
                  </li>
                  <li className="bg-red-400 text-white my-8 uppercase inline-block px-9 py-2">
                    <Link href="/app">L&apos;app</Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <ul className="hidden lg:flex items-center">
            <li className="m-8 text-xl group">
              <div className="relative after:absolute after:content-[''] after:block after:w-0 after:h-px after:bg-[#ea5460] after:duration-300 group-hover:after:w-full group-hover:text-[#ea5460]">
                <Link href="/recettes">recettes</Link>
              </div>
            </li>
            <li className="m-8 text-xl group">
              <div className="relative after:absolute after:content-[''] after:block after:w-0 after:h-px after:bg-[#ea5460] after:duration-300 group-hover:after:w-full group-hover:text-[#ea5460]">
                <Link href="/pratique">pratique</Link>
              </div>
            </li>
            <li className="m-8 text-xl">
              <Link href="/lapp" className="">
                <div className="bg-red-600 text-white p-2 hover:-rotate-12 duration-300 ease">
                  l&apos;app
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
