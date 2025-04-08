// import React from "react";
// import a from "../assets/1.png";
// import b from "../assets/2.png";
// import About from "./About.jsx";

// const Landing = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-r from-[#f9f9f9] to-[#fff7e1] min-h-screen flex flex-col lg:flex-row justify-center items-center p-6 sm:p-6 gap-10">
//         {/* Left Image Section */}
//         <div className="flex justify-center  mb-6 sm:mb-0">
//           <img
//             src={a}
//             alt="Professional Service"
//             className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-lg shadow-2xl object-cover"
//           />
//         </div>

//         {/* Text and Call to Action Section */}
//         <div className="text-center sm:text-left  flex flex-col items-start justify-start h-full gap-y-10 ">
//           <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2f4f4f] my-4 text-center">
//             Discover Professional Services Near You
//           </h2>
//           <p className="text-lg sm:text-xl text-center font-light text-[#555] mb-6">
//             Securely hire vetted and qualified workers for your projects with confidence and peace of mind.
//           </p>

//           <div className="flex justify-center mx-auto sm:justify-between gap-4">
//             <a
//               href="/login"
//               className="bg-[#183354] w-max text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
//             >
//               Become a Client
//             </a>
//             <a
//               href="/login"
//               className="bg-[#183354] w-max text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
//             >
//               Become a Provider
//             </a>
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className="flex justify-center mt-6 sm:mt-0">
//           <img
//             src={b}
//             alt="Professional Service"
//             className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-lg shadow-2xl object-cover"
//           />
//         </div>
//       </div>

//       {/* About Section (Optional - Uncomment if needed) */}
//       {/* <About /> */}
//     </>
//   );
// };

// export default Landing;


import React from "react";
import { FaUserCheck, FaBriefcase, FaShieldAlt, FaClock, FaStar, FaComments, FaTools } from "react-icons/fa"; // Importing additional icons
import a from "../assets/1.png";
import b from "../assets/2.png";
import About from "./About.jsx";

const Landing = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#f9f9f9] to-[#fff7e1] min-h-screen flex flex-col lg:flex-row justify-center items-center p-8 sm:p-10 gap-10 shadow-lg rounded-lg transition-all duration-300">
        
        {/* Left Image Section */}
        <div className="flex justify-center mb-6 sm:mb-0">
          <img
            src={a}
            alt="Professional Service"
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-lg shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text and Call to Action Section */}
        <div className="text-center sm:text-left flex flex-col items-start justify-start h-full gap-y-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2f4f4f] my-4 transition-all duration-300 hover:text-[#183354]">
            Discover Professional Services Near You
          </h2>
          <p className="text-lg sm:text-xl text-center font-light text-[#555] mb-6">
            Securely hire vetted and qualified workers for your projects with confidence and peace of mind.
          </p>

          {/* Additional Details Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaUserCheck className="text-4xl text-[#183354] mb-2" />
              <h3 className="font-bold text-lg">Vetted Professionals</h3>
              <p className="text-sm text-gray-600">All workers are thoroughly vetted for your peace of mind.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaBriefcase className="text-4xl text-[#183354] mb-2" />
              <h3 className="font-bold text-lg">Diverse Services</h3>
              <p className="text-sm text-gray-600">Find professionals for various projects, big or small.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-4xl text-[#183354] mb-2" />
              <h3 className="font-bold text-lg">Secure Payments</h3>
              <p className="text-sm text-gray-600">Your transactions are protected for a worry-free experience.</p>
            </div>
          </div>

          {/* On-Demand Services Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-[#2f4f4f] mb-4">On-Demand Services</h3>
            <p className="text-lg text-center font-light text-[#555] mb-6">
              Get instant access to a wide range of services at your convenience. Whether you need a handyman, a tutor, or a personal trainer, we’ve got you covered!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaClock className="text-4xl text-[#183354] mb-2" />
                <h4 className="font-bold text-lg">24/7 Availability</h4>
                <p className="text-sm text-gray-600">Services available anytime you need them.</p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaUserCheck className="text-4xl text-[#183354] mb-2" />
                <h4 className="font-bold text-lg">Instant Booking</h4>
                <p className="text-sm text-gray-600">Book services with just a few clicks.</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-[#2f4f4f] mb-4">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaStar className="text-4xl text-[#183354] mb-2" />
                <h4 className="font-bold text-lg">Top Ratings</h4>
                <p className="text-sm text-gray-600">Our professionals receive high ratings from satisfied clients.</p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaComments className="text-4xl text-[#183354] mb-2" />
                <h4 className="font-bold text-lg">Customer Support</h4>
                <p className="text-sm text-gray-600">We're here to assist you with any inquiries or issues.</p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaTools className="text-4xl text-[#183354] mb-2" />
                <h4 className="font-bold text-lg">Wide Range of Tools</h4>
                <p className="text-sm text-gray-600">We provide professionals with the right tools for the job.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mx-auto sm:justify-between gap-4">
            <a
              href="/login"
              className="bg-[#183354] w-max text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md transform hover:scale-105"
            >
              Become a Client
            </a>
            <a
              href="/login"
              className="bg-[#183354] w-max text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md transform hover:scale-105"
            >
              Become a Provider
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center mt-6 sm:mt-0">
          <img
            src={b}
            alt="Professional Service"
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-lg shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* About Section (Optional - Uncomment if needed) */}
      {/* <About /> */}
    </>
  );
};

export default Landing;
