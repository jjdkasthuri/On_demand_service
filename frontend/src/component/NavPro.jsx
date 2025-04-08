import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast , Bounce } from "react-toastify";

const NavPro = ({ val1, val2, val3, val4, email, people }) => {
  const navigate = useNavigate();

  const logoutButton = async () => {
    try {
      const res = await axios.get(
        `https://on-demand-service-m5nh.onrender.com/api/v1/logout/${email}`
      );
      
      toast.success('🦄 Logged Out Successfully!', {
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
      console.log(error);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col sm:justify-around items-center bg-white sticky top-0 h-[15vh] sm:h-max">
      <div className="flex sm:justify-start sm:ms-14 justify-center items-center">
        <img src={logo} alt="logo_image" className="w-16 h-16" />
        <button
          className="sm:hidden flex justify-center items-center  w-max h-max p-2 bg-[#fe4b01] text-base rounded font-medium text-white"
          onClick={logoutButton}
        >
          {val4}
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
          to={`/dashboard/booking/${email}/${people}`}
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
          to={`/dashboard/profile/provider/${email}/${people}`}
          className="hover:bg-[#ffbea3] p-2 flex justify-center rounded sm:mx-6 text-sm sm:text-lg font-medium text-slate-800"
        >
          Profile
        </Link>
      </div>
      <div className="flex justify-end me-8">
        <button
          className="hidden sm:flex w-max p-2 bg-[#fe4b01] text-base rounded font-medium text-white"
          onClick={logoutButton}
        >
          {val4}
        </button>
      </div>
    </div>
  );
};

export default NavPro;
