"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";

import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AllCategoriesCard = () => {
  const [categories, setCategories] = useState(null);

  const apiUrl = `${process.env.API_URL}/api/v1/product/categories`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          setCategories(response.data.newData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  // console.log("categoriesss", categories);

  return (
    <>
      <div className="lg:hidden card-mobile">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SingleCard />
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
            <SingleCard />
          </SwiperSlide>
        </Swiper>
      </div>
      {categories && (
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, i) => (
            <SingleCard categoryData={category} key={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllCategoriesCard;
