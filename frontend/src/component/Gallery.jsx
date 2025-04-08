// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Gallery = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: true,
//     arrows: false,
//   };

//   return (
//     <div
//       className="w-full"
//       style={{
//         minHeight: "80vh",
//         display: "flex",
//         flexDirection: "column",
//         background: "linear-gradient(135deg, #FFD580, #FFB347)",
//         backgroundAttachment: "fixed",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <h1 className="text-4xl font-bold text-center mt-12 text-gray-800 sm:text-5xl">
//         Professional Photo Gallery
//       </h1>
//       <p className="text-center mt-2 text-gray-600 text-lg sm:text-xl">
//         Capturing the essence of craftsmanship and artistry.
//       </p>
//       <Slider {...settings} className="w-[90%] max-w-4xl mx-auto mt-10">
//         {[
//           {
//             src: "https://img.freepik.com/free-photo/electrician-builder-work-examines-cable-connection-electrical-line-fuselage-industrial-switchboard-professional-overalls-with-electrician-s-tool_169016-8633.jpg",
//             alt: "Electrician inspecting connections in a professional setting",
//           },
//           {
//             src: "https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18675.jpg",
//             alt: "Carpenter working on wood with precision",
//           },
//           {
//             src: "https://img.freepik.com/free-photo/male-plumber-using-wrench-tighten-water-faucet-kitchen-seen-up-close_662251-2697.jpg",
//             alt: "Plumber using tools to fix a water faucet",
//           },
//           {
//             src: "https://img.freepik.com/free-photo/side-view-woman-cleaning-windows_23-2148394944.jpg",
//             alt: "Focused professional cleaning windows with dedication",
//           },
//         ].map((image, index) => (
//           <div key={index} className="p-4">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="h-96 w-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Gallery;








import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBolt, FaHammer, FaWrench, FaBroom, FaCar } from "react-icons/fa"; // Icons for services

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  const images = [
    {
      src: "https://img.freepik.com/free-photo/electrician-builder-work-examines-cable-connection-electrical-line-fuselage-industrial-switchboard-professional-overalls-with-electrician-s-tool_169016-8633.jpg",
      alt: "Electrician inspecting connections in a professional setting",
      title: "Electrical Expertise",
      description: "Our certified electricians ensure safe and efficient electrical installations, from wiring to panel upgrades. We handle both residential and commercial projects with precision and care.",
      icon: <FaBolt className="text-4xl text-orange-600 mb-4" />,
      features: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installations", "Safety Inspections"],
    },
    {
      src: "https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18675.jpg",
      alt: "Carpenter working on wood with precision",
      title: "Carpentry Craftsmanship",
      description: "From custom furniture to intricate woodwork, our skilled carpenters bring your vision to life. We specialize in high-quality, durable designs tailored to your needs.",
      icon: <FaHammer className="text-4xl text-orange-600 mb-4" />,
      features: ["Custom Furniture", "Cabinetry", "Wood Repairs", "Renovations"],
    },
    {
      src: "https://img.freepik.com/free-photo/male-plumber-using-wrench-tighten-water-faucet-kitchen-seen-up-close_662251-2697.jpg",
      alt: "Plumber using tools to fix a water faucet",
      title: "Plumbing Solutions",
      description: "Our experienced plumbers provide reliable services for leak repairs, pipe installations, and more. We ensure your water systems run smoothly and efficiently.",
      icon: <FaWrench className="text-4xl text-orange-600 mb-4" />,
      features: ["Leak Repairs", "Pipe Installations", "Drain Cleaning", "Water Heater Services"],
    },
    {
      src: "https://img.freepik.com/free-photo/side-view-woman-cleaning-windows_23-2148394944.jpg",
      alt: "Focused professional cleaning windows with dedication",
      title: "Professional Cleaning",
      description: "Our cleaning services leave your spaces spotless and refreshed. We use eco-friendly products and advanced techniques for a thorough clean every time.",
      icon: <FaBroom className="text-4xl text-orange-600 mb-4" />,
      features: ["Window Cleaning", "Deep Cleaning", "Eco-Friendly Products", "Regular Maintenance"],
    },
    {
      src: "https://img.freepik.com/free-photo/car-wash-service_23-2149100040.jpg",
      alt: "Car wash service in action",
      title: "Car Wash Services",
      description: "Keep your vehicle looking its best with our premium car wash and detailing services. We offer interior cleaning, waxing, and more to maintain your car’s shine.",
      icon: <FaCar className="text-4xl text-orange-600 mb-4" />,
      features: ["Exterior Wash", "Interior Cleaning", "Waxing & Polishing", "Detailing Packages"],
    },
  ];

  return (
    <div
      className="w-full"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #FFD580, #FFB347)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-center mt-12 text-gray-800 sm:text-5xl">
        Professional Photo Gallery
      </h1>
      <p className="text-center mt-2 text-gray-600 text-lg sm:text-xl">
        Capturing the essence of craftsmanship and artistry.
      </p>
      <Slider {...settings} className="w-[90%] max-w-4xl mx-auto mt-10">
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <div className="relative group">
              <img
                src={image.src}
                alt={image.alt}
                className="h-96 w-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4">
                {image.icon}
                <h2 className="text-2xl font-bold text-white mb-2">{image.title}</h2>
                <p className="text-center text-white text-lg mb-4">{image.description}</p>
                <ul className="text-white text-center mb-4">
                  {image.features.map((feature, i) => (
                    <li key={i} className="text-sm sm:text-base">{feature}</li>
                  ))}
                </ul>
                <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
