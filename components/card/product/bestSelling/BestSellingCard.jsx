import Image from "next/image";
import Link from "next/link";

const BestSellingCard = () => {
  return (
    <div className="border-4 border-secondary-color transition-all duration-500  hover:shadow-[#d6bc67] hover:shadow-lg">
      <div>
        <Link className="" href="/products">
          <div>
            <Image
              src="/images/products/best_selling.png"
              alt="bridal_top"
              width={326}
              height={461}
              className="w-full"
            />
          </div>
          <div className="w-full text-center text-primary-color bg-white py-4">
            <p className="text-lg font-semibold">BRIDAL SHARARA</p>
            <p className="text-xs font-semibold pt-1">UP TO 45% OFF</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BestSellingCard;
