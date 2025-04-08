import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Power3 } from "gsap/all";
import { MdEmail } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FaHireAHelper } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { IoStar } from "react-icons/io5";
import { IoCall } from "react-icons/io5";


const Profile = ({ profileDetail }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  console.log(profileDetail);
  profileDetail = profileDetail.provider;

 
  return (
    <div
      className="flex flex-col justify-center items-center bg-[#fafafa]"
      style={{ minHeight: "90vh" }}
    >
      {/* Profile Container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl mb-6 border border-gray-200">
        {/* Profile Image Section */}
        <div className="flex flex-col justify-center items-center bg-red-50 p-8 w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0">
          <div
            className={`profile-image-border w-48 h-48 xl:w-64 xl:h-64 border-4 border-orange-500 rounded-full overflow-hidden transition-transform duration-500 ${
              imageLoaded ? "transform rotate-360" : ""
            }`}
          >
            <img
              src={profileDetail.avatar}
              alt="Profile"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <h1 className="text-2xl font-bold mt-4 text-center flex items-center justify-center text-gray-800">
            <BsPeopleFill className="me-2 w-max text-[#507da1]" />
            {profileDetail.name}
          </h1>
          <h2 className="text-lg font-medium text-slate-500 mt-2 text-center">
            @{profileDetail.username}
          </h2>
        </div>

        {/* Profile Information Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-between md:ml-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Profile Details
            </h2>

            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600">
                <MdEmail className="w-max me-4 text-2xl text-[#507da1]" />
                {profileDetail.email || "Not Specified"}
              </p>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600">
                {profileDetail.isAvaliable ? (
                 <>
                  <TiTick className="w-max me-4 text-2xl text-[#507da1]" /> Available
                 </>
                  ) : (
                   <>
                    <CgUnavailable className="w-max me-4 text-2xl text-[#507da1]" /> Not Available
                   </>
                  )}
              </p>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600">
                <MdOutlineWork className="w-max me-4 text-2xl text-[#507da1]" />
                {profileDetail.work || "Not Specified"}
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600">
                <FaRupeeSign className="w-max me-4 text-2xl text-[#507da1]" />
                {profileDetail.price || NaN} per hour
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600">
                <IoStar className="w-max me-4 text-2xl text-[#ffe044]" />
                {profileDetail.Rating} / 5
              </p>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600">
                <IoCall className="w-max me-4 text-2xl text-[#507da1]" />
                {profileDetail.number || NaN} 
              </p>
            </div>

          
          </div>

          <p className="flex items-end justify-end text-right italic text-[#507da1]">
            Thank you for choosing Us 🙏
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Profile;
