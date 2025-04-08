// import React from "react";
// import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
// import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
// import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";

// const Section = () => {
//   const stats = [
//     {
//       icon: <VerifiedOutlinedIcon className="text-yellow-500 text-4xl" />,
//       value: "100+",
//       description: "Verified Workers",
//     },
//     {
//       icon: <PeopleAltOutlinedIcon className="text-yellow-500 text-4xl" />,
//       value: "70+",
//       description: "Demand Sponsored Businesses",
//     },
//     {
//       icon: <MilitaryTechOutlinedIcon className="text-yellow-500 text-4xl" />,
//       value: "120+",
//       description: "Average Hires Per Month",
//     },
//     {
//       icon: <LightbulbOutlinedIcon className="text-yellow-500 text-4xl" />,
//       value: "50+",
//       description: "Innovative Solutions Delivered",
//     },
//   ];

//   return (
//     <div className="min-h-[90vh] bg-[#fff7e1] font-mono py-20 px-4">
//       <h1 className="text-center text-4xl font-bold text-gray-800">
//         Demand Service App
//       </h1>
//       <p className="text-center text-lg font-normal text-gray-600 mt-4">
//         Providing clients with certified workers in real-time.
//       </p>

//       <div className="flex flex-wrap justify-center gap-8 mt-12">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 w-[280px] hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="mb-4">{stat.icon}</div>
//             <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
//             <div className="text-lg font-medium text-gray-600 mt-2">
//               {stat.description}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section;







import React from "react";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined"; // Icon for On-Demand Services
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"; // Icon for Fast Response
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined"; // Icon for Customer Satisfaction
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined"; // Icon for Customer Support

const Section = () => {
  const stats = [
    {
      icon: <VerifiedOutlinedIcon className="text-yellow-500 text-5xl" />,
      value: "100+",
      description: "Verified Workers",
      detail: "Our platform guarantees that every worker is thoroughly vetted and certified, ensuring peace of mind for clients.",
      benefit: "You can trust our workers to deliver quality service every time."
    },
    {
      icon: <PeopleAltOutlinedIcon className="text-yellow-500 text-5xl" />,
      value: "70+",
      description: "Demand Sponsored Businesses",
      detail: "We collaborate with numerous businesses to offer exclusive services and promotions, enhancing client satisfaction.",
      benefit: "Enjoy special deals and services tailored to your needs."
    },
    {
      icon: <MilitaryTechOutlinedIcon className="text-yellow-500 text-5xl" />,
      value: "120+",
      description: "Average Hires Per Month",
      detail: "Our efficient matching system connects clients with the right professionals quickly, ensuring timely hires.",
      benefit: "Get the help you need when you need it."
    },
    {
      icon: <LightbulbOutlinedIcon className="text-yellow-500 text-5xl" />,
      value: "50+",
      description: "Innovative Solutions Delivered",
      detail: "We focus on delivering creative and effective solutions tailored to meet diverse client needs.",
      benefit: "Experience cutting-edge services that stand out."
    },
    {
      icon: <LocalOfferOutlinedIcon className="text-yellow-500 text-5xl" />,
      value: "200+",
      description: "On-Demand Services Available",
      detail: "Access a wide range of services at your fingertips, ensuring that help is always just a click away.",
      benefit: "Get instant access to services whenever you need them."
    },
    {
      icon: <AccessTimeOutlinedIcon className="text-yellow-500 text-5xl" />,
      value: "24/7",
      description: "Fast Response Time",
      detail: "Our team is available around the clock to ensure timely assistance for all your needs.",
      benefit: "Never wait long for the help you require."
    },
    {
      icon: <StarOutlineOutlinedIcon className="text-yellow-500 text-5xl" />,
      value: "95%",
      description: "Customer Satisfaction Rate",
      detail: "Our clients rate us highly for our services, reflecting our commitment to excellence.",
      benefit: "Join thousands of satisfied customers who trust us."
    },
    {
      icon: <SupportAgentOutlinedIcon className="text-yellow-500 text-5xl" />,
      value: "Dedicated",
      description: "Customer Support",
      detail: "Our support team is dedicated to helping you resolve issues and answer questions promptly.",
      benefit: "We’re here for you, every step of the way."
    },
  ];

  return (
    <div className="min-h-[90vh] bg-[#fff7e1] font-mono py-20 px-4">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">
        Demand Service App
      </h1>
      <p className="text-center text-lg font-normal text-gray-600 mt-4 mb-12">
        Providing clients with certified workers in real-time.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 w-[280px] hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-lg font-medium text-gray-600 mt-2">
              {stat.description}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {stat.detail}
            </div>
            <div className="text-sm font-semibold text-gray-800 mt-2">
              {stat.benefit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
