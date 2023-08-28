import FetchServerSideData from "@/components/DataFetchingComponent/ServerSideDataFetching";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = async () => {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await FetchServerSideData(url);
  const data = allData?.data?.bannerSection;
  return (
    <div className="relative">
      <Image
        src={data?.image}
        alt="bridal_top"
        width={1860}
        height={681}
        className="w-full h-40 lg:h-auto"
      />
      <div className="text-primary-color absolute top-1/2 -translate-y-1/2 right-5 lg:right-28">
        <p className="text-xs lg:text-base font-medium">{data?.topHeading}</p>
        <p className="text-lg lg:text-4xl font-bold lg:mt-1 mb-1 lg:mb-4">
          {data?.mainHeading}
        </p>
        <Link href="/">
          <button className="text-white bg-secondary-color px-3 py-1 text-sm lg:text-base rounded-lg">
            Shopping Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
