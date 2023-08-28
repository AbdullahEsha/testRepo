//multiple toggle button where if I click one button all are closed
"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faq = ({ data }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (itemId) => {
    setOpenItemId((prevOpenItemId) =>
      prevOpenItemId === itemId ? null : itemId
    );
  };

  return (
    <div className="w-4/5 mx-auto flex flex-col gap-y-8">
      {data?.map((data, index) => (
        <div
          key={index}
          className="bg-primary-color text-white px-2 py-4 rounded-lg"
        >
          <button
            className="flex items-center"
            onClick={() => toggleItem(data._id)}
          >
            {openItemId === data._id ? <FaMinus /> : <FaPlus />}
            <span className="ml-3">{data?.title}</span>
          </button>

          {openItemId === data._id && (
            <div className="ml-7 mt-6">{data?.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
