import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

const Navclient = ({ 
  val1 = "Dashboard", 
  val2 = "Appointments", 
  val3 = "Home", 
  val4 = "Logout", 
  email, 
  people 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  

  const logoutButton = async () => {
    setIsLoading(true);
    try {
      await axios.get(`https://on-demand-service-m5nh.onrender.com/api/v1/logout/${email}`);
      toast.success("🦄 Logged Out Successfully!", {
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
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Failed to log out. Please try again!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col sm:justify-around items-center sm:h-max h-[15vh] bg-white sticky top-0">
      <div className="flex sm:justify-start sm:ms-14 justify-center items-center">
        <img src={logo} alt="logo_image" className="w-16 h-16" />
        <button
          aria-label="Logout (Mobile)"
          className="sm:hidden flex justify-center items-center w-max h-max p-2 bg-[#fe4b01] text-base rounded font-medium text-white"
          onClick={logoutButton}
          disabled={isLoading}
        >
          {isLoading ? "Logging out..." : val4}
        </button>
      </div>
      <div className="flex justify-center">
        <Link
          to={`/dashboard/${email}/${people}`}
          className="hover:bg-[#ffbea3] p-2 flex justify-center rounded sm:mx-6 text-sm sm:text-lg font-medium text-slate-800"
        >
          {val1}
        </Link>
        <Link
          to={`/dashboard/appointment/${email}/${people}`}
          className="hover:bg-[#ffbea3] p-2 flex justify-center rounded sm:mx-6 text-sm sm:text-lg font-medium text-slate-800"
        >
          {val2}
        </Link>
        {/* <Link
          to="/"
          className="hover:bg-[#ffbea3] p-2 flex justify-center rounded sm:mx-6 text-sm sm:text-lg font-medium text-slate-800"
        >
          {val3}
        </Link> */}
        <Link
          to={`/dashboard/profile/${email}/${people}`}
          className="hover:bg-[#ffbea3] p-2 flex justify-center rounded sm:mx-6 text-sm sm:text-lg font-medium text-slate-800"
        >
          Profile
        </Link>
      </div>
      <div className="flex justify-end me-8">
        <button
          aria-label="Logout (Desktop)"
          className={`hidden sm:flex w-max p-2 bg-[#fe4b01] text-base rounded font-medium text-white ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={logoutButton}
          disabled={isLoading}
        >
          {isLoading ? "Logging out..." : val4}
        </button>
      </div>
    </div>
  );
};

Navclient.propTypes = {
  val1: PropTypes.string,
  val2: PropTypes.string,
  val3: PropTypes.string,
  val4: PropTypes.string,
  email: PropTypes.string.isRequired,
  people: PropTypes.string.isRequired,
};

export default Navclient;
