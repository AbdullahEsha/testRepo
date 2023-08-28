import Image from "next/image";
import ProductModal from "../modal/ProductModal";
import { useState } from "react";
import useWindowDimensions from "@/customhooks/useDimensionWindow";

const DetailImage = ({ productData, setOpenModal, openModal }) => {
  const [imgUrl, setImgUrl] = useState();
  const [countUrl, setCountUrl] = useState(0);
  const { width } = useWindowDimensions();

  // console.log(
  //   "details",
  //   productData.variant.map((data) => data.imageUrl.map((url) => url))
  // );
  // console.log("details", productData.variant[0].imageUrl[0]);

  return (
    <>
      {productData && (
        <>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {productData?.variant?.map((elem) =>
              elem.imageUrl.map((url, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <Image
                    key={url}
                    src={url}
                    alt={url}
                    width={600}
                    height={800}
                    onClick={() => {
                      setImgUrl(url);
                      setCountUrl(index);
                    }}
                  />
                </button>
              ))
            )}
          </div>
          {width > 991 && openModal && (
            <ProductModal
              ProductData={productData?.variant?.map((data) =>
                data?.imageUrl?.map((url) => url)
              )}
              setOpenModal={setOpenModal}
              imgUrl={imgUrl}
              setImgUrl={setImgUrl}
              countUrl={countUrl}
              setCountUrl={setCountUrl}
            />
          )}
        </>
      )}
    </>
  );
};

export default DetailImage;
