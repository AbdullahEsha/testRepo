import React from "react";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

const ToogleButton = ({ title }) => {
  return (
    <button className="flex gap-2 items-center bg-gray-200 py-2 px-4 rounded-full font-medium min-w-full justify-center">
      {title} <TfiAngleDown size={12} className="group-hover:hidden" />
      <TfiAngleUp size={12} className="hidden group-hover:block" />
    </button>
  );
};

export default ToogleButton;
