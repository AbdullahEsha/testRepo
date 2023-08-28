"use client";
import { IoCloseSharp } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { ProductData } from "@/data/product";

//swiper import here
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

import useWindowDimensions from "@/customhooks/useDimensionWindow";

const ProductModal = ({
  setOpenModal,
  imgUrl,
  setImgUrl,
  countUrl,
  setCountUrl,
  ProductData,
}) => {
  SwiperCore.use([Keyboard, Mousewheel]);

  const { width } = useWindowDimensions();

  const handleCount = (data, idx) => {
    setImgUrl(data);
    setCountUrl(idx);
  };
  // console.log("ProductData", ProductData);
  const handleLeft = () => {
    const prev = countUrl > 0 ? countUrl - 1 : ProductData.length - 1;
    const dataLeft = ProductData.data.map((elem) => elem.src)[prev];
    setCountUrl(prev);
    setImgUrl(dataLeft);
  };
  const handleRight = () => {
    const next = countUrl < ProductData.length - 1 ? countUrl + 1 : 0;
    const dataRight = ProductData.data.map((elem) => elem.src)[next];
    setCountUrl(next);
    setImgUrl(dataRight);
  };

  const rightButton = document.querySelector(".swiper-button-next");
  const leftButton = document.querySelector(".swiper-button-prev");

  if (rightButton != undefined && leftButton != undefined) {
    rightButton.addEventListener("click", handleRight);
    leftButton.addEventListener("click", handleLeft);
  }

  return (
    <>
      {ProductData && (
        <div className="fixed z-50 left-0 top-0 w-[100%]  bg-white bg-opacity-30 backdrop-blur-[16px] product-modal">
          <div className={`flex fix relative justify-between h-[100vh]`}>
            <div>
              {width > 991 && (
                <Swiper
                  slidesPerView={3}
                  direction="vertical"
                  spaceBetween={40}
                  mousewheel={true}
                  keyboard={true}
                  navigation={true}
                  modules={[Navigation]}
                >
                  {ProductData.map((elem, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={elem[0]}
                        alt="details"
                        width={200}
                        height={200}
                        className={`rounded-md shadow-sm h-full w-auto  ${
                          elem[0] === imgUrl ? "" : "opacity-30"
                        }`}
                        onClick={() => handleCount(elem[0], index)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            <div
              className={`flex justify-center items-center h-[100vh] w-auto gap-4 relative left-28`}
            >
              {/* <button
              className="p-5 bg-white rounded-lg shadow-md relative z-20"
              onClick={() => handleLeft()}
            >
              <BsChevronLeft size={35} />
            </button> */}
              <Image
                src={imgUrl}
                alt="details"
                width={600}
                height={600}
                className="rounded-md shadow-md h-[80%] w-auto"
              />
              {/* <button
              className="p-5 bg-white rounded-lg shadow-md relative z-20"
              onClick={() => handleRight()}
            >
              <BsChevronRight size={35} />
            </button> */}
            </div>
            <IoCloseSharp
              size={25}
              className={`w-9 h-9 bg-white border border-black p-2 rounded-md m-2 shadow-sm z-40 cursor-pointer relative`}
              onClick={() => {
                setOpenModal(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;
