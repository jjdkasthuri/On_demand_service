// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import { Power3 } from "gsap/all";
// import { MdEmail } from "react-icons/md";
// import { BsPeopleFill } from "react-icons/bs";
// import { MdOutlineWork } from "react-icons/md";
// import { FaRupeeSign } from "react-icons/fa";
// import { FaHireAHelper } from "react-icons/fa";
// import { AiOutlineTransaction } from "react-icons/ai";

// const Profile = ({ profileDetail }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     // Wait for the image to be loaded, then trigger the border rotation
//     const handleImageLoad = () => {
//       setImageLoaded(true);
//       gsap.to(".profile-image-border", {
//         rotation: 360,
//         duration: 3,
//         repeat: 0,
//         ease: Power3.easeOut,
//       });
//     };

//     // Animate profile text to simulate typing effect
//     gsap.fromTo(
//       ".profile-text",
//       {
//         opacity: 0,
//         y: 50,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: Power3.easeOut,
//       }
//     );

//     return () => {
//       setImageLoaded(false);
//     };
//   }, []);

//   return (
//     <div
//       className="flex flex-col justify-center items-center bg-[#fafafa]"
//       style={{ minHeight: "90vh" }}
//     >
//       {/* Profile Container */}
//       <div className="flex flex-col md:flex-row w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl mb-6 border border-gray-200">
//         {/* Profile Image Section */}
//         <div className="flex flex-col justify-center items-center bg-red-50 p-8 w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0">
//           <div
//             className={`profile-image-border w-48 h-48 xl:w-64 xl:h-64 border-4 border-orange-500 rounded-full overflow-hidden transition-transform duration-500 ${
//               imageLoaded ? "transform rotate-360" : ""
//             }`}
//           >
//             <img
//               src={profileDetail.avatar}
//               alt="Profile"
//               className="w-full h-full object-cover"
//               onLoad={() => setImageLoaded(true)}
//             />
//           </div>
//           <h1 className="text-2xl font-bold mt-4 text-center flex items-center justify-center text-gray-800">
//             <BsPeopleFill className="me-2 w-max text-[#507da1]" />
//             {profileDetail.name}
//           </h1>
//           <h2 className="text-lg font-medium text-slate-500 mt-2 text-center">
//             @{profileDetail.username}
//           </h2>
//         </div>

//         {/* Profile Information Section */}
//         <div className="w-full md:w-2/3 flex flex-col justify-between md:ml-6">
//           <div className="flex flex-col gap-4">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Profile Details
//             </h2>

//             <div className="mb-4">
//               <p className="flex items-center text-lg text-gray-600">
//                 <MdEmail className="w-max me-4 text-2xl text-[#507da1]" />
//                 {profileDetail.email}
//               </p>
//             </div>

//             <div className="mb-4">
//               <p className="flex items-center text-lg text-gray-600">
//                 <MdOutlineWork className="w-max me-4 text-2xl text-[#507da1]" />
//                 Client
//               </p>
//             </div>

//             <div className="mb-4">
//               <p className="flex items-center text-lg text-gray-600">
//                 <FaHireAHelper className="w-max me-4 text-2xl text-[#507da1]" />
//                 {profileDetail.peopleHired} People Hired
//               </p>
//             </div>

//             <div className="mb-4">
//               <p className="flex items-center text-lg text-gray-600">
//                 <AiOutlineTransaction className="w-max me-4 text-2xl text-[#507da1]" />
//                 {profileDetail.transactionMade} Successfull Transactions
//               </p>
//             </div>
//           </div>

//           <p className="flex items-end justify-end text-right italic text-[#507da1]">
//             Thank you for choosing Us 🙏
//           </p>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default Profile;





import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Power3 } from "gsap/all";
import { MdEmail } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { FaHireAHelper } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";

const Profile = ({ profileDetail }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Wait for the image to be loaded, then trigger the border rotation
    const handleImageLoad = () => {
      setImageLoaded(true);
      gsap.to(".profile-image-border", {
        rotation: 360,
        duration: 3,
        repeat: 0,
        ease: Power3.easeOut,
      });
    };

    // Animate profile text to simulate typing effect
    gsap.fromTo(
      ".profile-text",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: Power3.easeOut,
      }
    );

    return () => {
      setImageLoaded(false);
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff]"
      style={{ padding: "2rem" }}
    >
      {/* Profile Container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl p-8 bg-white rounded-xl shadow-2xl border border-gray-100 transform transition-transform duration-300 hover:scale-105">
        {/* Profile Image Section */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-8 w-full md:w-1/3 rounded-xl shadow-lg mb-6 md:mb-0">
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
            <BsPeopleFill className="me-2 w-max text-[#507da1] hover:text-[#3a5f7a] transition-colors duration-300" />
            {profileDetail.name}
          </h1>
          <h2 className="text-lg font-medium text-slate-500 mt-2 text-center">
            @{profileDetail.username}
          </h2>
        </div>

        {/* Profile Information Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-between md:ml-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Profile Details
            </h2>

            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <MdEmail className="w-max me-4 text-2xl text-[#507da1] hover:text-[#3a5f7a] transition-colors duration-300" />
                {profileDetail.email}
              </p>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <MdOutlineWork className="w-max me-4 text-2xl text-[#507da1] hover:text-[#3a5f7a] transition-colors duration-300" />
                Client
              </p>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <FaHireAHelper className="w-max me-4 text-2xl text-[#507da1] hover:text-[#3a5f7a] transition-colors duration-300" />
                {profileDetail.peopleHired} People Hired
              </p>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <AiOutlineTransaction className="w-max me-4 text-2xl text-[#507da1] hover:text-[#3a5f7a] transition-colors duration-300" />
                {profileDetail.transactionMade} Successful Transactions
              </p>
            </div>
          </div>

          <p className="flex items-end justify-end text-right italic text-[#507da1] hover:text-[#3a5f7a] transition-colors duration-300">
            Thank you for choosing Us 🙏
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
