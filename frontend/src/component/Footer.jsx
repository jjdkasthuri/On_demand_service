import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="social-handles flex flex-row justify-center space-x-6 mb-4 sm:mb-0">
          <a className="hover:text-orange-400 transition duration-300" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="large" />
          </a>
          <a className="hover:text-orange-400 transition duration-300" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" />
          </a>
          <a className="hover:text-orange-400 transition duration-300" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon fontSize="large" />
          </a>
          <a className="hover:text-orange-400 transition duration-300" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>

        <div className="contact-info flex flex-col items-center mb-4 sm:mb-0">
          <h4 className="font-bold text-lg mb-2">Contact Us</h4>
          <div className="flex items-center mb-1">
            <PhoneIcon className="mr-2" />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="flex items-center mb-1">
            <EmailIcon className="mr-2" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center mb-1">
            <LocationOnIcon className="mr-2" />
            <span>123 Main St, City, Country</span>
          </div>
        </div>
      </div>

      <hr className="my-4 border-gray-600" />

      <div className="services-info text-center mb-4">
        <h4 className="font-bold text-lg mb-2">Our Services</h4>
        <div className="flex flex-wrap justify-center">
          <div className="flex items-center mx-2 my-1">
            <AccessTimeIcon className="mr-2" />
            <span>Quick Turnaround</span>
          </div>
          <div className="flex items-center mx-2 my-1">
            <BuildIcon className="mr-2" />
            <span>Home Repairs</span>
          </div>
          <div className="flex items-center mx-2 my-1">
            <LocalShippingIcon className="mr-2" />
            <span>Reliable Delivery</span>
          </div>
          <div className="flex items-center mx-2 my-1">
            <SupportAgentIcon className="mr-2" />
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="my-2 font-base font-bold text-gray-400">
          On-Demand Services at Your Fingertips
        </p>
        <p className="text-gray-400">
          All rights reserved to 
        </p>
      </div>
    </div>
  );
};

export default Footer;
