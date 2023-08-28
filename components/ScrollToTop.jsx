"use client";
import { FaAngleUp } from "react-icons/fa";

const ScrollTopButton = () => {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className="bg-[#F2F2F2] flex flex-col items-center py-2 text-gray-600 cursor-pointer"
    >
      <FaAngleUp className="animate-bounce" size={30} />
      <p className="font-semibold">BACK TO TOP</p>
    </div>
  );
};

export default ScrollTopButton;
