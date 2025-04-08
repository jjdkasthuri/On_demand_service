// import React from "react";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import cook from "../assets/cook.png";
// const Client = () => {
//   return (
//     <div
//       className="flex sm:flex-row flex-col bg-[#f3edeb]"
//       style={{ minHeight: "90vh" }}
//     >
//       <div className="flex justify-center items-center">
//         <img src={cook} alt="" />
//       </div>
//       <div className="flex flex-col px-10 py-32">
//         <div className="text-4xl font-extrabold my-2">
//           Get Reliable work with Safe Payment
//         </div>
//         <div className="text-lg font-normal my-4">
//           Save yourself from hours and get to-do list completed
//         </div>
//         <div className="flex my-4">
//           <RadioButtonCheckedIcon className="me-3" />
//           Find Skilled workers for your work
//         </div>
//         <div className="flex my-4">
//           <RadioButtonCheckedIcon className="me-3" />
//           Access to a wide range of services and providers
//         </div>
//         <div className="flex my-4">
//           <RadioButtonCheckedIcon className="me-3" />
//           Get instant payment protection and secure payment options
//         </div>
//         <a
//           href="/login"
//           className="bg-[#183354] my-4 w-max text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
//         >
//           Become a Client
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Client;





import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash"; // Alternative icon
import cook from "../assets/3333.png";

const Client = () => {
  return (
    <div
      className="flex sm:flex-row flex-col bg-[#f3edeb]"
      style={{ minHeight: "90vh" }}
    >
      <div className="flex justify-center items-center">
        <img src={cook} alt="Cooking illustration" />
      </div>
      <div className="flex flex-col px-10 py-32">
        <div className="text-4xl font-extrabold my-2">
          Get Reliable Work with Safe Payment
        </div>
        <div className="text-lg font-normal my-4">
          Save yourself from hours and get your to-do list completed.
        </div>
        <div className="flex my-4 items-center">
          <RadioButtonCheckedIcon className="me-3" />
          Find Skilled Workers for Your Work
        </div>
        <div className="flex my-4 items-center">
          <RadioButtonCheckedIcon className="me-3" />
          Access a Wide Range of Services and Providers
        </div>
        <div className="flex my-4 items-center">
          <RadioButtonCheckedIcon className="me-3" />
          Get Instant Payment Protection and Secure Payment Options
        </div>
        <div className="flex my-4 items-center">
          <VerifiedIcon className="me-3" />
          Verified Professionals to Ensure Quality Work
        </div>
        <div className="flex my-4 items-center">
          <SupportAgentIcon className="me-3" />
          24/7 Customer Support for Your Peace of Mind
        </div>
        <div className="flex my-4 items-center">
          <SecurityIcon className="me-3" />
          Safe and Secure Transactions with Encryption
        </div>

        <div className="text-2xl font-bold my-6">On-Demand Services</div>
        <div className="flex my-4 items-center">
          <AccessTimeIcon className="me-3" />
          **Quick Turnaround**: Get tasks done quickly and efficiently.
        </div>
        <div className="flex my-4 items-center">
          <BuildIcon className="me-3" />
          **Home Repairs**: Skilled workers available for plumbing, electrical, and general repairs.
        </div>
        <div className="flex my-4 items-center">
          <LocalShippingIcon className="me-3" />
          **Delivery Services**: Fast and reliable delivery for all your needs.
        </div>
        <div className="flex my-4 items-center">
          <LocalCarWashIcon className="me-3" /> {/* Alternative car wash icon */}
          **Car Wash Services**: Convenient and thorough car cleaning at your location.
        </div>

        <a
          href="/login"
          className="bg-[#183354] my-4 w-max text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
        >
          Become a Client
        </a>
      </div>
    </div>
  );
};

export default Client;
