"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";

const Payment = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        const countryList = data.map((country) => ({
          code: `+${country.callingCodes[0]}-${country.name}`,
          name: country.name,
        }));
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // console.log(countries);
  return (
    <div className="payment-container flex gap-10">
      <div className="py-20 flex-1">
        <Image
          src="/images/payment-logo.png"
          alt="My Image"
          width={260}
          height={200}
        />
        <div>
          <form className="w-full flex flex-col gap-y-9">
            <div className="w-full mt-6 flex flex-col gap-y-3">
              <div className="flex justify-between">
                <p className="text-lg font-medium text-gray-800">
                  Contact Information
                </p>
                <div className="flex gap-x-1 text-sm">
                  <p>Already have an account?</p>
                  <Link className="text-red-400" href="/">
                    Login
                  </Link>
                </div>
              </div>

              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                placeholder="Enter Your Email"
              />
              <div class="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl cursor-pointer"
                />
                <label
                  for="link-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                >
                  <p className="text-sm text-gray-500">
                    Email me with news and offers
                  </p>
                </label>
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <p className="text-lg font-medium text-gray-800">
                Shipping address
              </p>
              <div className="flex gap-4">
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Enter First Name"
                />
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </div>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Enter Address"
              />
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Enter Apartment, suite, etc. (optional)"
              />
              <div className="flex gap-4">
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Enter Your City"
                />
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Enter City Zip Code"
                />
              </div>

              <div className="relative">
                <select
                  className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Select A Country</option>
                  {countries.map((country, index) => (
                    <option key={index}>{country.name}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-x-4 ">
                <div className="relative flex-1">
                  <select
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option selected>Select Country Code</option>
                    {countries.map((country, index) => (
                      <option key={index}>{country.code}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-1"
                  type="text"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div class="flex items-center">
                <input
                  id="link-checkbox-bottom"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl cursor-pointer"
                />
                <label
                  for="link-checkbox-bottom"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                >
                  <p className="text-sm text-gray-500">
                    Save this information for next time
                  </p>
                </label>
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <div className="flex justify-between">
                <p className="text-lg font-medium text-gray-800">
                  Shipping Method
                </p>
              </div>
              <div className="relative">
                <select
                  className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Standard Shipping</option>
                  <option>Premium Shipping</option>
                  <option>Ultra Premium Shipping</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <Button text="Continue to Measurement" />
              <button className="flex gap-1 items-center">
                <AiOutlineRollback /> Return to Cart
              </button>
            </div>
          </form>

          <div className="pt-4 border-t-2 border-gray-200 mt-10 flex gap-x-4 text-gray-500">
            <Link href="/refund">Refund Policy</Link>
            <Link href="/refund">Shipping Policy</Link>
            <Link href="/refund">Privacy Policy</Link>
            <Link href="/refund">Terms of use</Link>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-primary-color">
        <div className="text-white payment-container-end mt-20 ml-10 text-sm">
          <div className="flex justify-between items-center pb-7 border-b mb-7">
            <div className="flex gap-4 items-center relative">
              <Image
                src="/images/products/details.png"
                alt="bridal_top"
                width={60}
                height={40}
                className="rounded-sm w-[4rem] h-[4.8rem]"
              />
              <div className="flex justify-center items-center bg-white rounded-full w-5 h-5 absolute -top-[8px] left-[50px]">
                <p className="text-primary-color text-xs font-semibold">1</p>
              </div>
              <div>
                <p>Lehenga</p>
                <p>XL</p>
              </div>
            </div>
            <p>BDT 2300/-</p>
          </div>
          <div className="flex justify-between items-center pb-7 border-b mb-7">
            <div className="flex gap-4 items-center relative">
              <Image
                src="/images/products/details.png"
                alt="bridal_top"
                width={60}
                height={40}
                className="rounded-sm w-[4rem] h-[4.8rem]"
              />
              <div className="flex justify-center items-center bg-white rounded-full w-5 h-5 absolute -top-[8px] left-[50px]">
                <p className="text-primary-color text-xs font-semibold">1</p>
              </div>
              <div>
                <p>Lehenga</p>
                <p>XL</p>
              </div>
            </div>
            <p>BDT 2300/-</p>
          </div>
          <div className="flex gap-x-4 border-b border-gray-600 pb-7">
            <input
              className="appearance-none bg-transparent block text-white border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-white w-4/5"
              type="text"
              placeholder="Apply Discount Coupon"
            />
            <button className="text-gray-600 bg-white px-2 py-1 rounded-md w-1/5">
              Apply
            </button>
          </div>

          <div className="mt-7 border-b border-gray-600 pb-7">
            <div className="flex justify-between items-center mb-3">
              <p>Sub Total</p>
              <p>BDT 5000/-</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping</p>
              <p>BDT 50/-</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <p>Total</p>
            <p>BDT 5050/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
