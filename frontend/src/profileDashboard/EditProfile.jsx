import axios from "axios";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";

const EditProfile = ({ profileDetail }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    avatar: null,
  });

  const handleOnChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];

      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload an image file.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB.");
        return;
      }

      setData({ ...data, avatar: file });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", data);

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    try {
      const response = await axios.patch(
        `https://on-demand-service-m5nh.onrender.com/api/v1/update-profile/${profileDetail.email}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Profile update response:", response.data);
      setData({
        username: "",
        password: "",
        avatar: null,
      });
      toast.success("🦄 Profile Updated Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error updating profile:", error.response || error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-gray-100 min-h-[90vh]"
    >
      <div className="flex flex-col items-center p-8 shadow-md bg-white w-full max-w-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        
        <form onSubmit={handleOnSubmit} className="flex flex-col w-full">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={handleOnChange}
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="avatar">Avatar</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleOnChange}
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
