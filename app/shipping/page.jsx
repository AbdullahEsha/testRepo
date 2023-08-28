import React from "react";
import { FaTruck } from "react-icons/fa";

const ShippingDelivery = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-xl font-medium text-gray-600">
        <FaTruck />
        SHIPPING & DELIVERY
      </h1>
      <div className="container mt-10 text-center flex flex-col items-center gap-y-6">
        <h1 className="text-2xl font-medium text-gray-600">Delivery Time</h1>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-gray-300 py-1 px-8 text-sm">
            <p className="font-medium">Ready Size</p>
            <p>1-2 Days</p>
          </button>
          <button className="bg-gray-300 py-1 px-8 text-sm">
            <p className="font-medium">Unstitched</p>
            <p>1-2 Days</p>
          </button>
          <button className="bg-gray-300 py-1 px-8 text-sm">
            <p className="font-medium">Bridals</p>
            <p>1-2 Days</p>
          </button>
          <button className="bg-gray-300 py-1 px-8 text-sm">
            <p className="font-medium">Stitched</p>
            <p>1-2 Days</p>
          </button>
        </div>
        <p>
          * For international orders, delivery timeline may fluctuate ± 2 weeks{" "}
          <br />
          **This is standard delivery timeline. However, based on the
          availability of slots, nature of order (normal/fast track) <br /> and
          season of order placement, the delivery time frame can vary.
        </p>
        <h2 className="text-lg font-medium text-gray-600">Customs & Duties</h2>
      </div>
      <div className="container mt-4">
        <p>
          {`Customs Duty is a tariff or tax imposed on goods when transported
          across international borders. The purpose of Customs Duty is to
          protect each country's economy, residents, jobs, environment, etc., by
          controlling the flow of goods, into and out of the country. Although
          the global customers order and purchase the goods online, the goods
          are still subject to an import procedure to clear the shipment through
          customs. Clearance depends on:`}
        </p>
        <ul className="mb-10 mt-4 ml-10">
          <li>The country of origin</li>
          <li>The value including transport charges</li>
          <li>The quantity of goods</li>
        </ul>
      </div>
    </div>
  );
};

export default ShippingDelivery;
