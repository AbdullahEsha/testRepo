"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

const MobileNavbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <div className="lg:hidden">
      <div className="container flex items-center">
        <div className="w-1/4">
          <button
            onClick={() => setToogle(!toogle)}
            className="text-3xl font-bold flex lg:hidden"
          >
            {toogle === false && <FaBars size={20} />}
            {toogle && <FaTimes size={20} />}
          </button>
        </div>

        <div className="w-2/4">
          <Link className="flex justify-center" href="/">
            <Image
              src="/images/nazara-navbar-logo.png"
              alt="logo"
              width={170}
              height={74}
            />
          </Link>
        </div>

        <div className="flex gap-2 sm:gap-4 items-center justify-end w-1/4">
          <button onClick={() => setToogle(!toogle)}>
            <FaSearch size={18} />
          </button>

          <FaUserCircle size={18} />

          <FaShoppingBag size={18} />
        </div>
      </div>

      {toogle && (
        <div className="block lg:hidden w-full origin-top absolute top-15 shadow-xl pb-4 rounded-b-2xl bg-primary-color ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="container ">
            <form className="">
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-50 outline-none my-2"
                  placeholder="Search"
                  required
                  // w-1/2 lg:w-3/4 xl:w-full
                />
              </div>
            </form>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/">HOME</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/">EXCLUSIVE WOMAN WEAR</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/packages">NEW ARRIVALS</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/membership">PARTY WEAR</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/about-us">REGULAR WEAR</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/contact-us">BRIDAL WEAR</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/contact-us">BOOK AN APPOINTMENT</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/contact-us">OUR LOCATIONS</Link>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
