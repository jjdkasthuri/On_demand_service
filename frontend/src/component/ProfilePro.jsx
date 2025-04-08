import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, Bounce } from "react-toastify";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProfilePro = ({ profileDetail }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    username: profileDetail.provider?.username || "",
    password: "",
    avatar: null,
    work: profileDetail.provider?.work || "",
  });
  const [isLoading, setIsLoading] = useState(false);


  const handleOnChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      if (file && validateFile(file)) {
        setData({ ...data, avatar: file });

        const reader = new FileReader();
        reader.onload = () => {
          document.getElementById("avatar-preview").src = reader.result;
        };
        reader.readAsDataURL(file);
      }
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!file) {
      toast.error("No file selected.");
      return false;
    }
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a valid image file (JPEG, PNG, GIF).");
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size exceeds 5MB.");
      return false;
    }
    return true;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("work", data.work);

    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    console.log(formData)
    try {
      const response = await axios.patch(
        `https://on-demand-service-m5nh.onrender.com/api/v1/provider-update-profile/${profileDetail.provider.email}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Profile update response:", response.data);


      setData({
        username: profileDetail.provider?.username || "",
        password: "",
        avatar: null,
        work: profileDetail.provider?.work || "",
      });
      setShow(false);

      toast.success("Profile Updated Successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-red-50" style={{ minHeight: "90vh" }}>
      <div className="flex flex-col items-center p-8 shadow-xl w-full max-w-md my-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6 font-mono">Profile Page</h1>
        <img
          id="avatar-preview"
          src={profileDetail.provider.avatar}
          alt="Profile"
          className="w-44 h-44"
          style={{ borderRadius: "50%", border: "4px solid #FFBD73" }}
        />
        <h1 className="text-2xl font-bold mt-4 text-center">{profileDetail.provider.name}</h1>
        <p className="text-lg mt-2 text-center text-gray-600">{profileDetail.provider.username}</p>
        <p className="text-base mt-2 text-center text-gray-400">{profileDetail.provider.email}</p>
        <p className="text-base mt-2 text-center text-gray-400">{profileDetail.provider.work}</p>
        <button
          className="bg-gray-900 text-white py-2 px-4 my-4 rounded-lg hover:bg-gray-700"
          onClick={() => setShow(!show)}
        >
          Edit Profile
        </button>

        {show && (
          <form onSubmit={handleOnSubmit} className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={data.username}
              onChange={handleOnChange}
              className="p-2 mb-4 border border-gray-300 rounded-md w-full"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className="p-2 mb-4 border border-gray-300 rounded-md w-full"
            />
            <input
              type="file"
              name="avatar"
              onChange={handleOnChange}
              className="p-2 mb-4 border border-gray-300 rounded-md w-full"
            />
            <FormControl variant="filled" style={{ width: "100%", margin: "10px 0" }}>
              <Select
                id="work"
                name="work"
                value={data.work}
                onChange={handleOnChange}
                displayEmpty
                inputProps={{ "aria-label": "Select Work" }}
              >
                <MenuItem value="" disabled>Select Work</MenuItem>
                <MenuItem value="Cleaner">Cleaner</MenuItem>
                <MenuItem value="Carpenter">Carpenter</MenuItem>
                <MenuItem value="Mechanic">Mechanic</MenuItem>
                <MenuItem value="Electrician">Electrician</MenuItem>
                <MenuItem value="Plumber">Plumber</MenuItem>
              </Select>
            </FormControl>
            <button
              type="submit"
              className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePro;
