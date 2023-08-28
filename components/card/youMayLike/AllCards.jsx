"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import SingleCard from "./SingleCard";
import axios from "axios";
import { useEffect, useState } from "react";
// import { getRandomObjects } from "@/components/GetRandomObject";

const AllCards = () => {
  const [data, setData] = useState([]);

  const apiUrl = `${process.env.API_URL}/api/v1/product`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  // const productData = data.product;

  //generate randomProducts
  const numberOfArraysToSelect = 8;
  const [randomArrays, setRandomArrays] = useState([]);

  useEffect(() => {
    if (data.product !== undefined) {
      const copyOfListOfArrays = [...data.product];

      for (let i = copyOfListOfArrays.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copyOfListOfArrays[i], copyOfListOfArrays[j]] = [
          copyOfListOfArrays[j],
          copyOfListOfArrays[i],
        ];
      }

      const selectedArrays = copyOfListOfArrays.slice(
        0,
        numberOfArraysToSelect
      );
      setRandomArrays(selectedArrays);
    }
  }, [data]);

  return (
    <>
      {randomArrays && (
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
              {randomArrays.map((data, i) => (
                <SwiperSlide key={i}>
                  <SingleCard data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {randomArrays.map((data, i) => (
              <div key={i}>
                <SingleCard data={data} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllCards;
