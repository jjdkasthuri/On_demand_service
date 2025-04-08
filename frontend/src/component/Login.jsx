import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import login from "../assets/login.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const Login = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
    people: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset any previous error
    try {
      const response = await axios.post(`https://on-demand-service-m5nh.onrender.com/api/v1/login`, {
        email: formData.email,
        password: formData.password,
      });
      toast.success('🦄 Login Successfully!', {
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
      navigate(`/dashboard/${formData.email}/${formData.people}`);
    } catch (error) {
      console.error("Login Error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f3edeb] min-h-screen flex justify-center items-center py-8">
      {/* Login Container */}
      <div className="container max-w-4xl w-full flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg p-8">
        
        {/* Left Column: Login Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img src={login} alt="Login Illustration" className="w-72 sm:w-96 h-auto" />
        </div>

        {/* Right Column: Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-semibold text-[#2f4f4f] text-center lg:text-left mb-6">Welcome 👋</h1>
          <p className="text-lg text-gray-500 text-center lg:text-left mb-6">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">Register</a>
          </p>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleOnSubmit} className="flex flex-col items-center w-full space-y-6">

            {/* Email Field */}
            <TextField
              id="email"
              label="Email"
              variant="filled"
              fullWidth
              name="email"
              type="email"
              required
              onChange={handleonChange}
              value={formData.email}
              className="input-field"
              InputProps={{ 
                style: { padding: '8px 12px', height: '45px' } 
              }}
            />

            {/* Password Field */}
            <TextField
              id="password"
              label="Password"
              variant="filled"
              fullWidth
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={handleonChange}
              value={formData.password}
              className="input-field"
              InputProps={{ 
                style: { padding: '8px 12px', height: '45px' } 
              }}
            />

            {/* User Role Selection */}
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

            {/* Login Button */}
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 w-max rounded mt-6 hover:bg-blue-500 transition duration-300"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
