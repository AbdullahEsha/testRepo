"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper";

const DeliveryData = ({ data }) => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-5">
        {data.map((data, index) => (
          <Image
            key={index}
            src={data}
            alt="bridal_top"
            width={233}
            height={103}
            className="w-full"
          />
        ))}
      </div>
      <div className="block lg:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {data.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="bridal_top"
                width={233}
                height={103}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DeliveryData;
