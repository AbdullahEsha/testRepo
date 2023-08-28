import PendingShipBadge from "@/components/PendingShipBadge";
import PercentageBadge from "@/components/PercentageBadge";
import ReadyToShipBadge from "@/components/ReadyToShipBadge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = ({ data }) => {
  // console.log("single product", data.data);
  const percentageReduction =
    ((data?.regularPrice - data?.salePrice) / data?.regularPrice) * 100;

  const percentageFloor = Math.floor(percentageReduction);
  // console.log("pp", percentageFloor);

  return (
    <div>
      <Link href={`/products/${data?._id}`}>
        <div className="relative">
          <Image
            src={data?.variant[0]?.imageUrl[0]}
            // src={""}
            alt="bridal_top"
            width={326}
            height={461}
            className="w-full rounded-[4px] border h-full"
          />
          {percentageFloor !== 0 && (
            <div className="absolute top-2 left-2">
              <PercentageBadge text={`- ${percentageFloor}%`} />
            </div>
          )}
        </div>
      </Link>
      <div className="w-full text-left bg-white my-4 ">
        <div className="flex items-center gap-2">
          <p className="text-md font-bold text-gray-700">
            BDT {data?.salePrice}/-
          </p>
          <p className="text-sm font-semibold line-through text-gray-500">
            BDT {data?.regularPrice}/-
          </p>
        </div>
        <p className="text-xs font-semibold my-2 text-gray-500">
          {data?.productName}
        </p>
        <ReadyToShipBadge text="Ready to Ship" />
      </div>
    </div>
  );
};

export default SingleCard;
