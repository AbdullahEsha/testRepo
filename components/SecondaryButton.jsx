import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="border-4 border-secondary-color hover:border-transparent px-6 py-2 font-medium rounded-lg hover:bg-secondary-color transition-colors duration-500">
      {text}
    </button>
  );
};

export default SecondaryButton;
