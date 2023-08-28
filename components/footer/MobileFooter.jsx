"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const MobileFooter = () => {
  const [serviceToogleArrow, setServiceToogleArrow] = useState(false);
  const [moreToogleArrow, setMoreToogleArrow] = useState(false);
  const [companyToogleArrow, setCompanyToogleArrow] = useState(false);
  return (
    <div className="lg:hidden container text-white text-center flex flex-col gap-y-10">
      <div className="">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/nazara-footer-logo.png"
            alt="My Image"
            width={256}
            height={117}
            className=""
          />
          {/* <h2 className="text-3xl font bold text-white">Elite Spa</h2> */}
        </Link>
      </div>

      <div>
        {/* service 1 */}
        <div>
          <ul className="flex flex-col gap-y-2 mb-2">
            <li className="text-white text-base font-medium mb-2 flex justify-center">
              <button
                className="flex items-center"
                onClick={() => setServiceToogleArrow(!serviceToogleArrow)}
              >
                CUSTOMER SERVICE
                {serviceToogleArrow ? (
                  <FaAngleUp size={20} />
                ) : (
                  <FaAngleDown size={20} />
                )}
              </button>
            </li>
            {serviceToogleArrow && (
              <>
                <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                  <Link href="/">Track Your Order</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                  <Link href="/">Shipping & Delivery</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                  <Link href="/">Return & Exchange</Link>
                </li>
                <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                  <Link href="/">Book an Appointment</Link>
                </li>
                <li className="text-white hover:underline underline-offset-2 text-sm font-normal mb-4">
                  <Link href="/faq">FAQ’S</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* service 2 */}
        <ul className="flex flex-col gap-y-2 mb-2">
          <li className="text-white flex justify-center text-base font-medium mb-2">
            <button
              className="flex items-center"
              onClick={() => setMoreToogleArrow(!moreToogleArrow)}
            >
              MORE FROM NAZARA
              {moreToogleArrow ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </button>
          </li>
          {moreToogleArrow && (
            <>
              <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                <Link href="/">E-Gift Cards</Link>
              </li>

              <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                <Link href="/">We’re Hiring!</Link>
              </li>

              <li className="text-white hover:underline underline-offset-2 text-base font-normal mb-4">
                <Link href="/location">Our Locations</Link>
              </li>
            </>
          )}
        </ul>

        {/* service 3 */}
        <ul className="flex flex-col gap-y-2">
          <li className="text-white flex justify-center text-base font-medium mb-2">
            <button
              className="flex items-center"
              onClick={() => setCompanyToogleArrow(!companyToogleArrow)}
            >
              OUR COMPANY
              {companyToogleArrow ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </button>
          </li>
          {companyToogleArrow && (
            <>
              <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                <Link href="/contact-us">Contact us</Link>
              </li>

              <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                <Link href="/about-us">About us</Link>
              </li>

              <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                <Link href="/terms-of-use">Terms of use</Link>
              </li>
              <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div>
        <div className="flex justify-center gap-x-6 mb-6">
          <Link
            href="https://www.facebook.com/EliteSpaFlorida/"
            target="_blank"
            // className="border p-2 rounded-full"
          >
            <FaFacebook size={30} color="white" />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            // className="border p-2 rounded-full"
          >
            <FaYoutube size={30} color="white" />
          </Link>
          <Link
            href="https://www.instagram.com/Elite_spa7/"
            target="_blank"
            // className="border p-2 rounded-full"
          >
            <FaInstagram size={30} color="white" />
          </Link>
          <Link href="https://www.instagram.com/Elite_spa7/" target="_blank">
            <FaTiktok size={30} color="white" />
          </Link>
        </div>

        <div className="flex gap-2 justify-center">
          <Image
            src="/images/visa.png"
            alt="My Image"
            width={48}
            height={37}
            className="brightness-50"
          />
          <Image
            src="/images/mastercard.png"
            alt="My Image"
            width={48}
            height={37}
            className="brightness-50"
          />
          <Image
            src="/images/paypal.png"
            alt="My Image"
            width={54}
            height={37}
            className="brightness-50"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <div>
          <span className="text-sm text-white">
            <div className="text-white mb-1">
              © Copyright 2022 ANZARA LIFESTYLE LTD. All rights Reserved.
            </div>
            <div className="text-white">
              Design & Development by
              <Link
                className="ml-1"
                href="https://bayshorecommunication.com/"
                target="_blank"
              >
                <span className="text-white underline underline-offset-2 mt-1">
                  Bayshore Communication
                </span>
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
