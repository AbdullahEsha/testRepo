"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PercentageBadge from "../PercentageBadge";
import ReadyToShipBadge from "../ReadyToShipBadge";
import PendingShipBadge from "../PendingShipBadge";
import Filter from "../shop/Filter";
import Brand from "../shop/Brand";
import Size from "../shop/Size";
import Price from "../shop/Price";
import Discount from "../shop/Discount";
import Delivery from "../shop/Delivery";
import Color from "../shop/Color";
import SortBy from "../shop/SortBy";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import Pagination from "./Pagination";

const AllProducts = (props) => {
  const allProducts = props.data;
  return (
    <div>
      <div>
        <div>
          <div className="block lg:hidden card-mobile mt-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={12}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className=""
            >
              <SwiperSlide>
                <Filter />
              </SwiperSlide>
              <SwiperSlide>
                <Brand />
              </SwiperSlide>
              <SwiperSlide>
                <Size />
              </SwiperSlide>
              <SwiperSlide>
                <Price />
              </SwiperSlide>
              <SwiperSlide>
                <Discount />
              </SwiperSlide>
              <SwiperSlide>
                <Delivery />
              </SwiperSlide>
              <SwiperSlide>
                <Color />
              </SwiperSlide>
              <SwiperSlide>
                <SortBy />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="hidden lg:flex py-4 border-b-2  items-center justify-between">
            <Filter />
            <div className="flex gap-4">
              <Brand />
              <Size />
              <Price />
              <Discount />
              <Delivery />
              <Color />
            </div>
            <SortBy />
          </div>
        </div>

        {/* products  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 my-6">
          {/* {[...Array(12)].map((x, i) => (
            <SingleCard key={i} />
          ))} */}
          {allProducts.map((data, i) => (
            <div key={i}>
              <Link href={`/products/${data?._id}`}>
                <div className="relative">
                  <Image
                    src={data?.variant[0]?.imageUrl[0]}
                    alt="bridal_top"
                    width={326}
                    height={461}
                    className="w-full h-full rounded-[4px] border"
                  />
                  <div className="absolute top-2 left-2">
                    <PercentageBadge text="-30%" />
                  </div>
                </div>
              </Link>
              <div className="w-full text-left bg-white my-4 ">
                <div className="flex items-center gap-2">
                  <p className="text-md font-bold text-gray-700">
                    BDT {data?.regularPrice}/-
                  </p>
                  <p className="text-sm font-semibold line-through text-gray-500">
                    BDT {data?.salePrice}/-
                  </p>
                </div>
                <p className="text-xs font-semibold my-2 text-gray-500">
                  {data?.productName}
                </p>
                <div className="flex gap-2 items-center">
                  <ReadyToShipBadge text="Ready to Ship" />
                  <PendingShipBadge text="Up to 2 weeks" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>{/* <Pagination /> */}</div>

        {/* pagination */}
        {/* <nav
          className="flex justify-center mb-10"
          aria-label="Page navigation example"
        >
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
};

export default AllProducts;
