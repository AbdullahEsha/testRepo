import React from "react";

const PendingShipBadge = ({ text }) => {
  return (
    <>
      <span className="bg-secondary-color text-white px-2 py-1 font-medium text-xs rounded-md">
        {text}
      </span>
    </>
  );
};

export default PendingShipBadge;
