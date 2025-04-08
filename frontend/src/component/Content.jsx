// import React from "react";
// import cleaning from "../assets/cleaning.png";
// import mechanic from "../assets/mechanic.png";
// import plumber from "../assets/plumber.png";
// import electrician from "../assets/electrician.png";
// import carpentar from "../assets/carpentar.png";
// import { useNavigate, useParams } from "react-router-dom";

// const Card = ({ src, value, handleOnCard }) => {
//   return (
//     <div className="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg mx-4 my-4 p-4 sm:h-56 sm:w-56 w-72 h-64 flex flex-col items-center justify-center">
//       <button onClick={handleOnCard} className="flex flex-col items-center">
//         <img
//           src={src}
//           alt={value}
//           className="h-32 w-32 object-contain mb-4 hover:scale-105 transition-transform duration-300"
//         />
//         <p className="text-center text-xl font-semibold text-orange-800 font-mono">
//           {value}
//         </p>
//       </button>
//     </div>
//   );
// };

// const Content = () => {
//   const { email, people } = useParams();
//   const navigate = useNavigate();

//   const categories = [
//     { src: cleaning, value: "Cleaning", work: "cleaner" },
//     { src: plumber, value: "Plumber", work: "plumber" },
//     { src: mechanic, value: "Mechanic", work: "mechanic" },
//     { src: electrician, value: "Electrician", work: "electrician" },
//     { src: carpentar, value: "Carpenter", work: "carpenter" },
//   ];

//   const handleOnCard = (work) => () => {
//     navigate(`/dashboard/${email}/${people}/${work}`);
//   };

//   return (
//     <div
//       className="content bg-[#fff7e1] p-8 flex flex-col items-center"
//       style={{ minHeight: "80vh" }}
//     >
//       <h1 className="text-4xl font-mono font-bold text-gray-800">Welcome 👋</h1>
//       <p className="italic text-yellow-600 my-4 text-center max-w-xl">
//         "The best way to find yourself is to lose yourself in the service of others."
//       </p>
//       <h2 className="text-3xl my-5 font-mono font-semibold text-[#532c34]">
//         Categories
//       </h2>
//       <div className="flex flex-wrap justify-center items-center gap-6">
//         {categories.map((category, index) => (
//           <Card
//             key={index}
//             src={category.src}
//             value={category.value}
//             handleOnCard={handleOnCard(category.work)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Content;








import React from "react";
import cleaning from "../assets/cleaning.png";
import mechanic from "../assets/mechanic.png";
import plumber from "../assets/plumber.png";
import electrician from "../assets/electrician.png";
import carpentar from "../assets/carpentar.png";
import carwash from "../assets/cook.png";
import gardener from "../assets/1.png"; // New item
import painter from "../assets/2.png"; // New item
import mover from "../assets/3333.png"; // New item
import { useNavigate, useParams } from "react-router-dom";

const Card = ({ src, value, handleOnCard, description, highlights, price, rating }) => {
  return (
    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl mx-4 my-4 p-6 sm:h-80 sm:w-64 w-80 h-96 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
      <button onClick={handleOnCard} className="flex flex-col items-center w-full">
        <img
          src={src}
          alt={value}
          className="h-32 w-32 object-contain mb-4 hover:scale-110 transition-transform duration-300"
        />
        <p className="text-center text-2xl font-semibold text-orange-800 font-sans">
          {value}
        </p>
        <p className="text-center text-sm text-gray-600 mt-2 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 text-center text-sm text-gray-700">
          <p><strong>Highlights:</strong> {highlights}</p>
          <p><strong>Price:</strong> {price}</p>
          <p><strong>Rating:</strong> {rating}</p>
        </div>
        <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300">
          Learn More
        </button>
      </button>
    </div>
  );
};

const Content = () => {
  const { email, people } = useParams();
  const navigate = useNavigate();

  const categories = [
    {
      src: cleaning,
      value: "Cleaning",
      work: "cleaner",
      description: "Professional cleaning services for homes and offices.",
      highlights: "Eco-friendly products, deep cleaning",
      price: "$50 - $200",
      rating: "4.8/5",
    },
    {
      src: plumber,
      value: "Plumber",
      work: "plumber",
      description: "Expert plumbing solutions for all your needs.",
      highlights: "24/7 emergency service, leak repair",
      price: "$75 - $300",
      rating: "4.7/5",
    },
    {
      src: mechanic,
      value: "Mechanic",
      work: "mechanic",
      description: "Reliable car repair and maintenance services.",
      highlights: "Engine diagnostics, brake repair",
      price: "$100 - $500",
      rating: "4.9/5",
    },
    {
      src: electrician,
      value: "Electrician",
      work: "electrician",
      description: "Safe and efficient electrical installations and repairs.",
      highlights: "Wiring, panel upgrades",
      price: "$80 - $400",
      rating: "4.6/5",
    },
    {
      src: carpentar,
      value: "Carpenter",
      work: "carpenter",
      description: "Custom woodwork and furniture crafting.",
      highlights: "Custom designs, furniture repair",
      price: "$100 - $600",
      rating: "4.8/5",
    },
    {
      src: carwash,
      value: "Car Wash",
      work: "carwash",
      description: "Premium car washing and detailing services.",
      highlights: "Interior cleaning, waxing",
      price: "$20 - $100",
      rating: "4.5/5",
    },
    {
      src: gardener,
      value: "Gardener",
      work: "gardener",
      description: "Expert gardening and landscaping services.",
      highlights: "Lawn care, plant maintenance",
      price: "$50 - $150",
      rating: "4.7/5",
    },
    {
      src: painter,
      value: "Painter",
      work: "painter",
      description: "Professional painting services for homes and offices.",
      highlights: "Interior and exterior painting",
      price: "$100 - $500",
      rating: "4.6/5",
    },
    {
      src: mover,
      value: "Mover",
      work: "mover",
      description: "Reliable moving and packing services.",
      highlights: "Local and long-distance moves",
      price: "$200 - $800",
      rating: "4.8/5",
    },
  ];

  const handleOnCard = (work) => {
    navigate(`/dashboard/${email}/${people}/${work}`);
  };

  return (
    <div
      className="content bg-gradient-to-br from-[#fff7e1] to-[#ffe8b5] p-8 flex flex-col items-center"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="text-5xl font-sans font-bold text-gray-800 mb-4 animate-fade-in">
        Welcome 👋
      </h1>
      <p className="italic text-yellow-700 my-4 text-center max-w-xl text-lg">
        "The best way to find yourself is to lose yourself in the service of others."
      </p>
      <h2 className="text-4xl my-6 font-sans font-semibold text-[#532c34]">
        Categories
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {categories.map((category, index) => (
          <Card
            key={index}
            src={category.src}
            value={category.value}
            handleOnCard={() => handleOnCard(category.work)}
            description={category.description}
            highlights={category.highlights}
            price={category.price}
            rating={category.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
