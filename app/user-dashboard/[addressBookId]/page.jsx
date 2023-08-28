"use client";
import Loader from "@/components/Loader";
import CreateAddressBook from "@/components/user-dashboard/CreateAddressBookModal";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import EditAddressBook from "@/components/user-dashboard/EditAddressBookModal";
import { useDeleteUserAddressByIdMutation, useGetUserByIDQuery } from "@/services/userApi";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";

const AddressBook = ({ params }) => {
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [addAddressBookModal, setAddAddressBookModal] = useState(false);
  const [addressEditId, setAddressEditId] = useState("");

  const userData = useGetUserByIDQuery(params.addressBookId);
  const [deleteAddress] = useDeleteUserAddressByIdMutation();

  const { isLoading: userDataLoading } = userData;

  if (userDataLoading) {
    return <Loader height="h-[90vh]" />;
  }

  let data;
  if (userData.status === "fulfilled") {
    data = userData.data.data;
  }

  const dataLength = data?.addressBook?.length;

  const handleEditModal = (id) => {
    setAddressModalOpen(true);
    setAddressEditId(id);
  };

   //handle delete
   
   const handleDeleteAddress = async (id) => {
     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     }).then(async (result) => {
       if (result.isConfirmed) {
         const categoryDel = await deleteAddress(id);
         if (categoryDel) {
           Swal.fire("Deleted!", "Your address has been deleted.", "success");
         }
       }
     });
   };

  return (
    <>
      {
        userDataLoading ? <Loader height="h-[90vh]" />: <div className="container my-10">
        {data && (
          <h2 className="text-xl font-semibold">Hello, {data?.fullName}</h2>
        )}
        <DashboardUtil />
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold my-3 text-gray-800">
            Address Book
          </h1>
          <button
            onClick={() => setAddAddressBookModal(true)}
            className="flex items-center gap-1 text-sm font-medium text-gray-700"
          >
            <AiOutlinePlus color="#820000" /> Add New Address
          </button>
        </div>
        <div>
          {!data ? <Loader height="h-[80vh]" />:
            <div className="text-gray-700 font-medium text-sm grid grid-cols-1 lg:grid-cols-2 gap-6">
              {
                data.addressBook.map((data) => (
                  <div
                    key={data?._id}
                    className="border rounded-lg p-6 hover:shadow-xl flex flex-col gap-y-3"
                  >
                    <div className="flex justify-between">
                      <p className="text-base font-semibold">{data?.fullName}</p>
                     <div className="flex gap-2">
                        <button
                            // onClick={() => setAddressModalOpen(true)}
                            onClick={() => handleEditModal(data?._id)}
                            className="text-primary-color font-medium"
                          >
                            EDIT
                          </button>
                          {
                            dataLength > 1 && <button onClick={()=>handleDeleteAddress(data?._id)} className="text-primary-color font-medium">DELETE</button>
                          }
                     </div>
                    </div>
                    <p>{data?.mobile}</p>
                    <div>
                      {/* province, city, area  */}
                      <p>{`${data?.street}, ${data?.zip}`}</p>
                      {/* other address  */}
                      <p>{`${data?.city}, ${data?.country}`}</p>
                    </div>
      
                    <p className="bg-slate-200 px-1 py-0.5 text-green-500 w-max">
                      {data?.addressType}
                    </p>
                  </div>
                ))
              }  
            </div>}
        </div>
        {addressModalOpen && (
          <EditAddressBook
            addressEditId={addressEditId}
            setAddressBookModalOpen={setAddressModalOpen}
          />
        )}
        {addAddressBookModal && data?._id && (
          <CreateAddressBook
            userId={data?._id}
            setAddAddressBookModal={setAddAddressBookModal}
          />
        )}
      </div>
      }
    </>
  );
};

export default AddressBook;
