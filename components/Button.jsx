import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-6 py-2 font-medium rounded-lg hover:bg-primary-hover-color transition-colors duration-500">
        {text}
      </button>
    </>
  );
};

export default Button;
