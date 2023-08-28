import React from "react";

const ReadyToShipBadge = ({ text }) => {
  return (
    <>
      <span className="bg-primary-color text-white px-2 pb-1 pt-[2px] font-medium text-xs rounded-md">
        {text}
      </span>
    </>
  );
};

export default ReadyToShipBadge;
