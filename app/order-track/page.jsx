import React from "react";
import { FaTruck } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";

const OrderTrack = () => {
  return (
    <div className="container h-[50vh]">
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-2xl font-medium">
        <FaTruck />
        TRACK YOUR ORDER
      </h1>
      <form className="h-full mt-24 w-[90%] mx-auto">
        <input
          className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="grid-first-name"
          type="email"
          placeholder="Email"
        />
        <input
          className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="grid-first-name"
          type="text"
          placeholder="Order No"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-16 mt-4 py-1 font-medium rounded-sm hover:bg-primary-hover-color transition-colors duration-500 flex items-center gap-1"
          >
            <GiBinoculars /> TRACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderTrack;
