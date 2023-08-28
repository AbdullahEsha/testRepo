import { TbArrowsExchange } from "react-icons/tb";

const ReturnAndExchange = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-xl font-medium text-gray-600">
        <TbArrowsExchange />
        RETURN & EXCHANGE
      </h1>
      <div className="container mt-10 flex flex-col items-center gap-y-6">
        <h1 className="text-2xl font-medium text-gray-600">
          ELIGIBILITY CRITERIA
        </h1>
        <div className="w-[90%] lg:w-[70%] mx-auto">
          <ol className="list-decimal space-y-3">
            <li>
              NO MONEY REFUND, MONEY CAN BE ADJUSTED WITH ANOTHER PURCHASE
              (WITHIN 7 DAYS)
            </li>
            <li>DELIVERED PRODUCTS CANNOT BE EXCHANGED.</li>
            <li>
              DRESS CAN BE BOOKED FOR A MAXIMUM OF 2 MONTHS (60 DAYS) WITH 50%
              BOOKING MONEY. AFTER 2 MONTHS, THE ORDER WILL BE CANCELLED AND THE
              BOOKING AMOUNT WILL BE NON-REFUNDABLE & NON- ADJUSTABLE.
            </li>
            <li>
              BOOKED DRESS CANNOT BE CANCELLED, BUT EXCHANGE IS POSSIBLE (WITHIN
              60 DAYS MAXIMUM).
            </li>
            <li>
              TOTAL VALUE OF THE BILL HAS TO BE MET WHILE EXCHANGING THE BOOKED
              PRODUCT. (NOT JUST THE BOOKING AMOUNT)
            </li>
          </ol>
        </div>
      </div>
      <div className="container my-10">
        <form className="lg:w-[60%] mx-auto">
          <div className="flex gap-x-4">
            <input
              className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Order No"
            />
            <input
              className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="grid-first-name"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            id="grid-first-name"
            type="email"
            placeholder="Product Name"
          />
          <select class="block w-full px-4 py-2 pr-8 rounded bg-white border border-gray-300 focus:outline-none text-gray-500">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-16 mt-4 py-1 font-medium rounded-sm hover:bg-primary-hover-color transition-colors duration-500 flex items-center gap-1"
            >
              {" "}
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReturnAndExchange;
