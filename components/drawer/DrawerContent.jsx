"use client";
import Image from "next/image";
import React, { useState } from "react";
import PendingShipBadge from "../PendingShipBadge";
import { RxDotFilled } from "react-icons/rx";

const DrawerContent = ({ setIsOpen }) => {
  // button toogle
  const [toggle, setToggle] = useState("size");
  const [size, setSize] = useState("cm");

  return (
    <div className="relative overflow-y-auto">
      <button
        className="absolute top-3 right-5 text-2xl"
        onClick={() => setIsOpen(false)}
      >
        x
      </button>
      <div className="p-4">
        <h1 className="text-xl text-gray-600 font-medium pb-1">Size Chart</h1>
        <hr />
        <div className="flex gap-2 my-4">
          <Image
            src="/images/modal.png"
            alt="bridal_top"
            width={600}
            height={300}
            className="w-[40%]"
          />
          <div>
            <h3 className="font-bold text-xl">Agha Jaan</h3>
            <p className="text-gray-500">N06 - Pret</p>
            <p className="flex items-center -ml-1 text-sm font-medium">
              <RxDotFilled size={30} color="green" />
              In Stock
            </p>
            <div className="flex items-center gap-2">
              <p className="font-bold text-bold text-xl">BDT 4,000/-</p>
              <p className="line-through text-sm font-medium">BDT 5,000/-</p>
              <PendingShipBadge text="10%" />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex justify-around py-1">
            <button
              className={`text-gray-500 font-medium ${
                toggle === "size" && "underline underline-offset-8"
              }`}
              onClick={() => setToggle("size")}
            >
              SIZE CHART
            </button>
            <button
              className={`text-gray-500 font-medium ${
                toggle === "measure" && "underline underline-offset-8"
              }`}
              onClick={() => setToggle("measure")}
            >
              HOW TO MEASURE
            </button>
          </div>
          <hr />
          {toggle === "size" && (
            <div className="my-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-xl">Shirt</h2>
                <div className="flex gap-2">
                  <div
                    onClick={() => setSize("cm")}
                    className="flex items-center gap-1"
                  >
                    <input
                      id="cm"
                      type="radio"
                      name="radio-1"
                      className="radio radio-sm"
                    />
                    <label htmlFor="cm">Cm</label>
                  </div>

                  <div
                    onClick={() => setSize("in")}
                    className="flex items-center gap-1"
                  >
                    <input
                      id="in"
                      type="radio"
                      name="radio-1"
                      className="radio radio-sm"
                    />
                    <label htmlFor="in">In</label>
                  </div>
                </div>
              </div>
              <div className="overflow-x-scroll">
                {size === "cm" && (
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Sizes</th>
                        <th>XS (Cm)</th>
                        <th>S (Cm)</th>
                        <th>M (Cm)</th>
                        <th>L (Cm)</th>
                        <th>XL (Cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row */}
                      <tr>
                        <th>Length</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Bust</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Waist</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Hip shirt</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Daman</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Arm Length</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Arm Hole</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Bicep</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {size === "in" && (
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Sizes</th>
                        <th>XS (In)</th>
                        <th>S (In)</th>
                        <th>M (In)</th>
                        <th>L (In)</th>
                        <th>XL (In)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row */}
                      <tr>
                        <th>Length</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Bust</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Waist</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Hip shirt</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Daman</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Arm Length</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Arm Hole</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Bicep</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
              <hr />
              <div>
                <h2 className="text-lg font-semibold my-2">How to Measure</h2>
                <Image
                  src="/images/measurement-chart.png"
                  alt="bridal_top"
                  width={600}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          )}
          {toggle === "measure" && (
            <div>
              <div>
                <h2 className="text-lg font-semibold my-2">How to Measure</h2>
                <Image
                  src="/images/measurement-chart.png"
                  alt="bridal_top"
                  width={600}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
