import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = ({ categoryData }) => {
  // console.log(categoryData);
  return (
    <>
      {categoryData && (
        <div>
          <Link
            href={`/products/categories/${categoryData.category}`}
            className="relative"
          >
            <Image
              src={`${categoryData.url}`}
              alt="bridal_top"
              width={338}
              height={438}
              className="border-4 border-secondary-color brightness-75 hover:brightness-100 transition-all duration-500 w-full"
            />
            <div className="absolute bottom-10 w-full text-center">
              <p className="text-secondary-color text-lg font-semibold">
                {categoryData.category}
              </p>
              <p className="text-xs text-white">SHOP NOW</p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleCard;
