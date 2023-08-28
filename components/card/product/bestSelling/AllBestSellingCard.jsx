"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import BestSellingCard from "./BestSellingCard";

const AllBestSellingCard = () => {
  return (
    <>
      <div className="flex gap-4 lg:hidden card-mobile">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {[...Array(8)].map((x, i) => (
            <SwiperSlide key={i}>
              <BestSellingCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {[...Array(8)].map((x, i) => (
          <BestSellingCard key={i} />
        ))}
      </div>
    </>
  );
};

export default AllBestSellingCard;
