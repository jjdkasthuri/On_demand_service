import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import register from "../assets/register.png";
import { useNavigate } from "react-router-dom";
import { toast,Bounce } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    people: "",
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // For button state

  const handleonChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setFormdata({ ...formData, avatar: file });

      // Preview the uploaded image
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAvatarPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormdata({ ...formData, [name]: value });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!formData.people) {
      alert("Please select if you are a client or provider.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("people", formData.people);
    if (formData.avatar) {
      formDataToSend.append("avatar", formData.avatar);
    }

    try {
      setIsSubmitting(true); // Disable the button during submission
      const response = await axios.post(`https://on-demand-service-m5nh.onrender.com/api/v1/register`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response.data);
      toast.success('🦄 User Registered Successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      // Reset form
      setFormdata({
        name: "",
        email: "",
        password: "",
        username: "",
        people: "",
        avatar: null,
      });
      setAvatarPreview(null);
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to register. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div
      className="bg-[#f3edeb] flex justify-center items-center flex-col sm:flex-row"
      style={{ minHeight: "90vh" }}
    >
      <div className="flex justify-center items-center">
        <img src={register} alt="Registration Illustration" className="w-96 h-96" />
      </div>
      <div className="flex justify-center items-center flex-col sm:me-14 shadow-lg p-4 my-2">
        <h1 className="text-3xl font-mono my-3 text-center sm:text-left">Get Started</h1>
        <p className="text-lg text-gray-400 my-3 text-center sm:text-left">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400">
            Login
          </a>
        </p>
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col items-center sm:items-start"
          encType="multipart/form-data"
        >
          <TextField
            id="name"
            label="Name"
            variant="filled"
            style={{ width: "60%", margin: "1% 0" }}
            name="name"
            required
            onChange={handleonChange}
            value={formData.name}
          />
          <TextField
            id="username"
            label="Username"
            variant="filled"
            style={{ width: "60%", margin: "1% 0" }}
            name="username"
            required
            onChange={handleonChange}
            value={formData.username}
          />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            style={{ width: "60%", margin: "1% 0" }}
            name="email"
            type="email"
            required
            onChange={handleonChange}
            value={formData.email}
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            style={{ width: "60%", margin: "1% 0" }}
            name="password"
            type="password"
            autoComplete="current-password"
            required
            onChange={handleonChange}
            value={formData.password}
          />
          <br />
          <label htmlFor="profile" className="sm:me-8 text-center sm:text-left">
            Profile image:
          </label>
          <input
            id="profile"
            style={{ width: "60%", margin: "1% 0" }}
            name="avatar"
            type="file"
            onChange={handleonChange}
            accept="image/*"
          />
          {avatarPreview && (
            <img src={avatarPreview} alt="Avatar Preview" className="w-24 h-24 mt-2 rounded-full" />
          )}
          <br />
          <div className="flex text-base font-medium sm:justify-start justify-center">
            <div className="flex items-center me-14 w-max">
              <input
                type="radio"
                id="client"
                name="people"
                value="client"
                checked={formData.people === "client"}
                onChange={handleonChange}
              />
              <label htmlFor="client" className="ml-2">
                Client
              </label>
            </div>
            <div className="flex items-center w-max">
              <input
                type="radio"
                id="provider"
                name="people"
                value="provider"
                checked={formData.people === "provider"}
                onChange={handleonChange}
              />
              <label htmlFor="provider" className="ml-2">
                Provider
              </label>
            </div>
          </div>
          <br />
          <button
            type="submit"
            className={`bg-orange-500 text-white py-2 px-4 rounded w-max my-4 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
