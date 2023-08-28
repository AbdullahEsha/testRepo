import Image from "next/image";

const Cart = () => {
  return (
    <>
      <div className="bg-transparent w-7 h-4 absolute top-5"></div>
      <div className="bg-white w-96 h-min absolute top-8 right-0 z-50 rounded-xl p-4 shadow-xl">
        <Image
          src="/images/shopping-bag.png"
          alt="cart"
          width={440}
          height={400}
        />
        <div className="text-center">
          <h2 className="text-primary-color font-semibold text-xl mt-4">
            Your shopping bag is empty
          </h2>
          <p className="text-gray-500 mt-2 mb-3">{`Let's fill it up, shall we?`}</p>
          <p className="text-text-color mb-3 font-medium">
            Show me trending items
          </p>
        </div>
        <button
          type="submit"
          className="mt-1 px-4 py-2 rounded-lg bg-primary-color text-white transition-colors duration-500 text-sm font-medium hover:bg-primary-hover-color w-full"
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default Cart;
