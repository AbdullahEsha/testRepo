import Image from "next/image";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const EditUserProfile = ({ setIsModalOpen }) => {
  const [file, setFile] = useState();
  console.log(file);
  function handleChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="fixed z-10 left-0 top-0 h-full w-full overflow-auto flex items-center justify-center backdrop-opacity-50 bg-white/60 ">
      <div className="h-max w-96 lg:w-[28rem] bg-white relative rounded-xl border-4 border-secondary-color">
        <button
          className="btn btn-sm btn-circle absolute right-3 top-[6px]"
          onClick={() => setIsModalOpen(false)}
        >
          <IoCloseSharp size={26} color="gray" />
        </button>
        <h2 className="ml-9 mt-3 text-lg font-semibold text-gray-600">
          Edit Your Details:
        </h2>
        <div className="mt-3 mb-3 mx-4">
          <div>
            <form className="border p-5 rounded-lg">
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mobile"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Gender
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected disabled>
                      Choose a Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <input type="file" onChange={handleChange} />
                {file && (
                  <Image
                    src={file}
                    alt="My Image"
                    width={200}
                    height={180}
                    className="mt-2"
                  />
                )}
              </div>
              <button className="mt-4 w-full bg-primary-color py-2 text-white rounded-md hover:bg-primary-hover-color text-sm">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
