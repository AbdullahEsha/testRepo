"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import SecondaryButton from "@/components/SecondaryButton";

const RightCarosel = ({ data }) => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <div className="">
        <div className="relative">
          {data.map((slide, k) => (
            <SwiperSlide key={k}>
              <div className="grid grid-cols-2 lg:block items-center gap-x-4">
                <Image
                  src={slide?.image}
                  alt="My Image"
                  width={320}
                  height={600}
                  className="w-full h-[20rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[42rem] border-4 border-secondary-color"
                />
                <div className="lg:absolute lg:bottom-16 lg:left-4 xl:left-10 text-black lg:text-white">
                  <p className="text-lg lg:text-xl font-semibold">
                    {slide?.topHeading}
                  </p>
                  <h2 className="my-4 font-bold text-3xl lg:text-4xl xl:text-5xl">
                    {slide?.mainHeading}
                  </h2>
                  <SecondaryButton text="Explore More" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
};

export default RightCarosel;
