"use client";
import Loader from "@/components/Loader";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import EditUserProfile from "@/components/user-dashboard/EditUserProfileModal";
// import usefetch from "@/customhooks/usefetch";
import { useGetUserByIDQuery } from "@/services/userApi";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //get authenticate user id using cookie
  let getUserIdFromCookie;
  const cookie = getCookie("userAuthCredential");
  if (cookie != null) {
    const obj = JSON.parse(cookie);
    getUserIdFromCookie = obj._id;
  }

  //fetch specific user data using rtk query
  const {data, isLoading} = useGetUserByIDQuery(getUserIdFromCookie);

  // when isLoading is false show loading spinner
  if (isLoading) {
    return <Loader height="h-[90vh]" />;
  }
  const authUserData = data?.data;

  return (
    <>
    {
      isLoading ? <Loader height="h-[90vh]" /> : <div className="container my-10 flex flex-col gap-y-4">
      <h2 className="text-xl font-semibold">Hello, {authUserData?.fullName}</h2>
      <DashboardUtil />
      <div>
        <div className="text-gray-600 flex flex-col lg:flex-row gap-4 items-start">
          <div className="border rounded-lg py-2 px-4 flex-1">
            <div className="flex gap-2 mb-2">
              <p className="text-lg font-medium">Personal Profile</p>
              <p> | </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-primary-color"
              >
                Edit
              </button>
            </div>
            {authUserData?.fullName && <p>{authUserData?.fullName}</p>}
            {authUserData?.email && <p>{authUserData?.email}</p>}
            <p>Phone: +880 1303949494</p>
            <p>Gender: Male</p>
          </div>
          <div className="border rounded-lg py-2 px-4 flex-[2]">
            <div className="flex gap-2 mb-2">
              <p className="text-lg font-medium">Address Book</p>
              <p> | </p>
              <Link href={`/user-dashboard/${authUserData?._id}`}>
                <button className="text-primary-color">Edit</button>
              </Link>
            </div>

            {authUserData?.addressBook && (
              <div className="flex gap-3">
                {authUserData?.addressBook.map((data) => (
                  <div key={data._id} className="border-e-2 flex-1">
                    <p className="text-md text-green-700 bg-slate-200 px-2 py-1 w-max text-xs">
                      {data?.addressType}
                    </p>
                    <p className="my-2 font-semibold text-gray-700">
                      {data?.fullName}
                    </p>
                    <p>{`${data?.street}, ${data?.zip}`}</p>
                    <p>{`${data?.city}, ${data?.country}`}</p>
                    <p>{data?.mobile}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* recent order  */}
        <div>
          <div className="relative overflow-x-auto border py-2 px-4 rounded-lg text-gray-500 mt-4">
            <h2 className="text-lg font-medium ml-2 mb-2">Recent Orders</h2>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Placed On
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    22322862836283
                  </th>
                  <td className="px-6 py-4">27/12/2022</td>
                  <td className="px-6 py-4">
                    <Image
                      src="/images/category/bridal_top.png"
                      alt="My Image"
                      width={46}
                      height={40}
                    />
                  </td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    22322862836283
                  </th>
                  <td className="px-6 py-4">27/12/2022</td>
                  <td className="px-6 py-4">
                    <Image
                      src="/images/category/bridal_top.png"
                      alt="My Image"
                      width={46}
                      height={40}
                    />
                  </td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    22322862836283
                  </th>
                  <td className="px-6 py-4">27/12/2022</td>
                  <td className="px-6 py-4">
                    <Image
                      src="/images/category/bridal_top.png"
                      alt="My Image"
                      width={46}
                      height={40}
                    />
                  </td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    22322862836283
                  </th>
                  <td className="px-6 py-4">27/12/2022</td>
                  <td className="px-6 py-4">
                    <Image
                      src="/images/category/bridal_top.png"
                      alt="My Image"
                      width={46}
                      height={40}
                    />
                  </td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    22322862836283
                  </th>
                  <td className="px-6 py-4">27/12/2022</td>
                  <td className="px-6 py-4">
                    <Image
                      src="/images/category/bridal_top.png"
                      alt="My Image"
                      width={46}
                      height={40}
                    />
                  </td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isModalOpen && <EditUserProfile setIsModalOpen={setIsModalOpen} />}
    </div>
    }
    </>
  );
};

export default UserDashboard;
