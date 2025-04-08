import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaUsers, FaStar, FaRocket, FaShieldAlt } from "react-icons/fa"; // Importing additional icons
import OnDemandImage from "../assets/2.png"; // Replace with your image path

const About = () => {
  return (
    <div className="about-container flex flex-col items-center p-8 bg-gradient-to-br from-[#f4f6ff] to-[#ffffff] min-h-screen">
      <h1 className="text-5xl font-bold text-[#2f4f4f] mb-8 animate-fade-in">
        About Us
      </h1>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl leading-relaxed animate-fade-in">
        We are dedicated to providing exceptional services tailored to your needs. Our team is committed to ensuring the highest quality and customer satisfaction. With years of experience and a passion for innovation, we strive to deliver solutions that make a real difference.
      </p>

      <h2 className="text-4xl font-semibold text-[#2f4f4f] mb-8 animate-fade-in">
        On-Demand Services
      </h2>
      <img
        src={OnDemandImage}
        alt="On-Demand Service"
        className="w-full max-w-2xl rounded-xl shadow-2xl mb-12 animate-fade-in"
      />

      <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl leading-relaxed animate-fade-in">
        Our On-Demand Services are designed to meet your needs quickly and efficiently. Whether you require immediate assistance or tailored solutions, we have you covered. From consultation to execution, we ensure a seamless experience that saves you time and effort.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
        <div className="service-card flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 animate-fade-in">
          <FaClock className="text-[#fe4b01] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">24/7 Availability</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            Our services are available around the clock to ensure you receive support whenever you need it. No matter the time zone or urgency, we’re here to help.
          </p>
        </div>

        <div className="service-card flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 animate-fade-in">
          <FaUsers className="text-[#fe4b01] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            Our experienced professionals are ready to assist you, providing top-notch services tailored to your needs. With diverse expertise, we tackle challenges with precision and creativity.
          </p>
        </div>

        <div className="service-card flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 animate-fade-in">
          <FaStar className="text-[#fe4b01] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            We pride ourselves on delivering high-quality services that exceed your expectations. Rigorous testing and continuous improvement are at the core of our process.
          </p>
        </div>
      </div>

      {/* Additional Services Section */}
      <h2 className="text-4xl font-semibold text-[#2f4f4f] mb-8 animate-fade-in">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mb-12">
        <div className="service-card flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 animate-fade-in">
          <FaRocket className="text-[#fe4b01] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Rapid Response</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            We ensure a swift response to all inquiries, so you can get the help you need without delay. Our streamlined processes minimize wait times and maximize efficiency.
          </p>
        </div>

        <div className="service-card flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 animate-fade-in">
          <FaShieldAlt className="text-[#fe4b01] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Security & Trust</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            Your safety is our priority. We implement stringent security measures to protect your information. From encryption to compliance, we safeguard your data at every step.
          </p>
        </div>
      </div>

      <Link
        to="/contact"
        className="bg-[#fe4b01] text-white text-center text-lg font-medium py-3 px-6 rounded-xl shadow-lg hover:bg-[#e44301] transition-transform transform hover:scale-105 animate-fade-in"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default About;
