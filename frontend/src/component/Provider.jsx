// import React from "react";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import business from "../assets/business.png";
// const Provider = () => {
//   return (
//     <div
//       className="flex sm:flex-row flex-col bg-[#fdd867]"
//       style={{ minHeight: "90vh" }}
//     >
//       <div className="flex flex-col pe-10 sm:ps-32 ps-14 py-32">
//         <div className="text-4xl font-extrabold my-2">
//           Earn More from Reliable Customers
//         </div>
//         <div className="text-lg font-normal my-4">
//           Save yourself from hours and get to-do list completed
//         </div>
//         <div className="flex my-4">
//           <RadioButtonCheckedIcon className="me-3" />
//           Easily access to client rasks and projects.
//         </div>
//         <div className="flex my-4">
//           <RadioButtonCheckedIcon className="me-3" />
//           Direct booking and secure payments.
//         </div>
//         <div className="flex my-4">
//           <RadioButtonCheckedIcon className="me-3" />
//           AI tools to enhance service quality.
//         </div>
//         <a
//           href="/login"
//           className="bg-[#183354] w-max text-white py-2 sm:px-6 px-2 rounded-lg sm:text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
//         >
//           Become a Service Provider
//         </a>
//       </div>
//       <div className="flex justify-center items-center">
//         <img src={business} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Provider;





import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import business from "../assets/business.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; // Icon for On-Demand Services

const Provider = () => {
  return (
    <div className="flex sm:flex-row flex-col bg-gradient-to-r from-[#fdd867] to-[#fbcf5b]" style={{ minHeight: "90vh" }}>
      <div className="flex flex-col pe-10 sm:ps-32 ps-14 py-32">
        <h1 className="text-4xl font-extrabold my-2">Earn More from Reliable Customers</h1>
        <p className="text-lg font-normal my-4">
          Save yourself from hours and get your to-do list completed efficiently.
        </p>
        <div className="my-4">
          <div className="flex items-center mb-3">
            <RadioButtonCheckedIcon className="me-3 text-[#183354]" />
            <span>Easily access client tasks and projects.</span>
          </div>
          <div className="flex items-center mb-3">
            <RadioButtonCheckedIcon className="me-3 text-[#183354]" />
            <span>Direct booking and secure payments.</span>
          </div>
          <div className="flex items-center mb-3">
            <RadioButtonCheckedIcon className="me-3 text-[#183354]" />
            <span>AI tools to enhance service quality.</span>
          </div>
          <div className="flex items-center mb-3">
            <AccessTimeIcon className="me-3 text-[#183354]" />
            <span>Flexible scheduling to meet your needs.</span>
          </div>
          <div className="flex items-center mb-3">
            <VerifiedUserIcon className="me-3 text-[#183354]" />
            <span>Verified customers for peace of mind.</span>
          </div>
          <div className="flex items-center mb-3">
            <MonetizationOnIcon className="me-3 text-[#183354]" />
            <span>Competitive rates and earning potential.</span>
          </div>
          <div className="flex items-center mb-3">
            <SupportAgentIcon className="me-3 text-[#183354]" />
            <span>24/7 customer support for your convenience.</span>
          </div>
          <div className="flex items-center mb-3">
            <StarIcon className="me-3 text-[#183354]" />
            <span>High ratings from satisfied clients.</span>
          </div>
          {/* New On-Demand Services Section */}
          <div className="flex items-center mb-3">
            <LocalOfferIcon className="me-3 text-[#183354]" />
            <span>On-Demand Services tailored to your needs.</span>
          </div>
          <div className="ml-8 mb-3">
            <ul className="list-disc">
              <li className="flex items-center mb-2">
                <RadioButtonCheckedIcon className="me-2 text-[#183354] text-sm" />
                <span>Quick response times for urgent requests.</span>
              </li>
              <li className="flex items-center mb-2">
                <RadioButtonCheckedIcon className="me-2 text-[#183354] text-sm" />
                <span>Customizable service packages based on your requirements.</span>
              </li>
              <li className="flex items-center mb-2">
                <RadioButtonCheckedIcon className="me-2 text-[#183354] text-sm" />
                <span>Access to a wide range of professionals across various fields.</span>
              </li>
              <li className="flex items-center mb-2">
                <RadioButtonCheckedIcon className="me-2 text-[#183354] text-sm" />
                <span>Seamless integration with your existing workflows.</span>
              </li>
            </ul>
          </div>
        </div>
        <a
          href="/login"
          className="bg-[#183354] w-max text-white py-2 sm:px-6 px-2 rounded-lg sm:text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
        >
          Become a Service Provider
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img 
          src={business} 
          alt="Business Illustration" 
          className="max-w-full sm:max-w-3xl" 
          style={{ width: "16000px", height: "auto" }} // Set a larger width and auto height
        />
      </div>
    </div>
  );
};

export default Provider;
