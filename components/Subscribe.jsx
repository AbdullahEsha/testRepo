import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Subscribe = () => {
  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.API_URL}/api/v1/subscriber`;

      const response = await axios.post(url, { email: formData });

      if (response.status === 200) {
        toast.success("Successfully Subscribed");
        setFormData("");
      }
    } catch (error) {
      if (error.response.status === 422) {
        toast.error("Already Subscribed with this email!");
        setFormData("");
      } else {
        toast.error("Something Went Wrong!");
      }
    }
  };
  return (
    <div className="container text-white flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-10 py-6">
      <div className="lg:w-3/5">
        <p className="text-xl font-semibold mb-4">JOIN ON OUR LIST TODAY!</p>
        <p className="text-base text-center lg:text-left">
          Be the first to know about new products, exclusive collections, the
          latest trends, and more. By Clicking on “Subscribe”, you agree to
          receive our newsletter. You can opt out at any time.
        </p>
      </div>

      <div className="lg:w-2/5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-2"
        >
          <input
            type="email"
            value={formData}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-gray-300 w-[22rem] lg:w-full"
            placeholder="Enter Your Email"
            required
          />
          <button
            type="submit"
            className="bg-white text-primary-color px-4 py-2 lg:py-0 rounded-lg hover:bg-primary-color hover:text-white transition-colors duration-500 text-sm font-medium"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
