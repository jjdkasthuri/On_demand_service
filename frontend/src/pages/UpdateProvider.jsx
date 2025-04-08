import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import update from "../assets/update.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const UpdateProvider = ({ show }) => {
  const { email } = useParams();
  const [isLarge, setIsLarge] = useState(window.innerWidth > 640);
  const [formData, setFormData] = useState({
    number: "",
    isAvaliable: false,
    work: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? checked : value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!formData.number || !formData.work || !formData.price) {
      toast.error("❌ Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        `https://on-demand-service-m5nh.onrender.com/api/v1/provider-details/${email}`,
        formData
      );
      toast.success("🦄 Details Updated Successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("❌ Something went wrong! Please try again.", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row ${
        isLarge ? "absolute top-20 left-1/2 transform -translate-x-1/2 w-3/5" : "w-full"
      }`}
    >
      {/* Left Section - Image */}
      <div className="flex justify-center items-center p-4">
        <img
          src={update}
          alt="Update Illustration"
          className="w-full max-w-xs sm:max-w-md"
        />
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-col w-full sm:pl-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Update Details 👋</h1>
          <button
            className="bg-gray-200 w-max p-2 rounded-full hover:bg-gray-300"
            onClick={() => show(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <form
          onSubmit={handleOnSubmit}
          className="mt-4 flex flex-col gap-4"
        >
          <TextField
            id="number"
            label="Phone Number"
            variant="outlined"
            name="number"
            type="number"
            fullWidth
            required
            onChange={handleOnChange}
            value={formData.number}
          />
          <TextField
            id="price"
            label="Price Charged"
            variant="outlined"
            name="price"
            type="number"
            fullWidth
            required
            onChange={handleOnChange}
            value={formData.price}
          />
          <FormControl className="" style={{overflow:"hidden"}} variant="outlined">
            <Select
              id="work"
              name="work"
              value={formData.work}
              onChange={handleOnChange}
              className=""
              displayEmpty
            >
              <MenuItem value="" disabled className="w-max">
                Select Work
              </MenuItem>
              <MenuItem value="Cleaner" className="">Cleaner</MenuItem>
              <MenuItem value="Carpenter" className="">Carpenter</MenuItem>
              <MenuItem value="Mechanic" className="">Mechanic</MenuItem>
              <MenuItem value="Electrician" className="">Electrician</MenuItem>
              <MenuItem value="Plumber" className="">Plumber</MenuItem>
            </Select>
          </FormControl>
          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAvaliable"
                className="w-max"
                value="true"
                checked={formData.isAvaliable === true}
                onChange={handleOnChange}
              />
              Available
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAvaliable"
                value="false"
                className="w-max"
                checked={formData.isAvaliable === false}
                onChange={handleOnChange}
              />
              Not Available
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#183354] text-white py-2 px-6 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProvider;
