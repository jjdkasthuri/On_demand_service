import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { Bounce, toast } from "react-toastify";

const Booking = () => {
  const { email, work, people } = useParams() || {};
  if (!email || !work || !people) {
    console.error("Missing route parameters:", { email, work, people });
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);

  useEffect(() => {
    const dataCollector = async () => {
      try {
        setLoading(true);
        const Work = titleCase(work);
        const response = await axios.get(
          `https://on-demand-service-m5nh.onrender.com/api/v1/show-booking/${Work}`
        );
        setData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch worker data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    dataCollector();
  }, [work]);

  const titleCase = (s) => {
    return s
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const Card = ({ item }) => {
    const showMoreDetails = () => {
      setSelectedWorker(item);
      setShowDetails(true);
    };
  
    return (
      <div className="flex flex-col sm:flex-row w-full max-w-sm sm:max-w-md m-4 bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full sm:w-1/3 h-48 sm:h-auto bg-gradient-to-r from-orange-400 to-yellow-200 p-4 flex items-center justify-center">
          <img
            src={item.avatar}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md"
            alt="Worker"
          />
        </div>
  
        {/* Details Section */}
        <div className="flex flex-col justify-between flex-grow p-5 bg-gradient-to-br from-orange-50 to-white">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 flex items-center">
              <PeopleAltOutlinedIcon className="text-orange-500 me-2" />
              {item.name}
            </h2>
            <p className="text-sm sm:text-md text-gray-600 flex items-center mb-1">
              <WorkOutlineOutlinedIcon className="text-orange-400 me-2" />
              {item.work}
            </p>
            <p className="text-sm sm:text-md text-gray-600 flex items-center mb-3">
              <LocalPhoneOutlinedIcon className="text-orange-400 me-2" />
              {item.number}
            </p>
          </div>
          <div className="flex items-center mb-3">
            <StarBorderOutlinedIcon className="text-yellow-500 me-2" />
            <span className="text-gray-700 font-medium">{item.Rating}</span>
          </div>
          <button
            className="py-2 px-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 ease-in-out w-max "
            onClick={showMoreDetails}
          >
            Book Now
          </button>
        </div>
      </div>
    );
  };
  
  // const BubbleForProviderDetails = ({ selectedWorker, setShowDetails }) => {
  //   console.log(selectedWorker)
  //   const handleOnBook = async (e) => {
  //     e.preventDefault();
  //     const hours = e.target.hour.value;
  //     const Data = {
  //       number: selectedWorker.number,
  //       email: email,
  //       hour: hours,
  //       status :"Pending"
  //     };

  //     try {
  //       console.log(Data);
  //       // Uncomment to send booking request to the server
  //       await axios.post(`https://on-demand-service-m5nh.onrender.com/api/v1/new-booking`, Data);
  //       toast.success("🦄 Booked Successfully!", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: false,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //       });
  //       setShowDetails(false); // Close the modal after successful booking
  //     } catch (error) {
  //       console.error("Booking failed:", error);
  //       toast.error("❌ Booking Failed! Please try again.", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: false,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //       });
  //     }
  //   };

  //   const [isLarge, setIsLarge] = useState(window.innerWidth > 640);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsLarge(window.innerWidth > 640);
  //     };

  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  //   return (
  //     <div
  //       className={`bg-[#f3edeb] shadow-2xl text-center flex justify-center items-center rounded-md p-4 flex-col ${
  //         isLarge
  //           ? "absolute top-[25%] lg:left-[25%] lg:w-[50vw] sm:h-[60vh]"
  //           : "relative w-[100vw] h-[100%]"
  //       }`}
  //     >
  //       <div className="flex justify-end">
  //         <button
  //           className="flex w-max justify-end"
  //           onClick={() => setShowDetails(false)}
  //         >
  //           <CloseIcon
  //             style={{
  //               background: "#fff",
  //               padding: "4px",
  //               borderRadius: "50%",
  //             }}
  //           />
  //         </button>
  //       </div>
  //       <div className="flex justify-center items-center w-max">
  //         <img
  //           src={selectedWorker?.avatar}
  //           alt="Worker"
  //           className="h-28 w-28 rounded-[50%] me-10 ms-auto flex justify-center"
  //         />
  //         <div className="flex flex-col">
  //           <p className="text-xl font-semibold">{selectedWorker?.name}</p>
  //           <p>{selectedWorker?.username}</p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col justify-center items-center">
  //         <p className="flex justify-center items-center w-max text-nowrap my-2"><MdWork className="me-2"/> {selectedWorker.work}</p>
  //         <p className="flex justify-center items-center w-max text-nowrap my-2"> <FaPhoneAlt className="me-2"/> {selectedWorker.number}</p>
  //         <p className="flex justify-center items-center w-max text-nowrap my-2"><MdEmail className="me-2" />{selectedWorker.email}</p>
  //         <p className="flex justify-center items-center w-max text-nowrap my-2"> <FaStar className="me-2"/> {selectedWorker.Rating}</p>
  //         <p className="flex justify-center items-center w-max text-nowrap my-2">{selectedWorker.totalWork}</p>
  //         <p className="flex justify-center items-center w-max text-nowrap my-2"> <FaRupeeSign className="me-2" /> {selectedWorker.price} per hour</p>
  //       </div>
  //       <form onSubmit={handleOnBook} action="POST" className="outline-none">
  //         <input
  //           type="number"
  //           placeholder="Hours to book"
  //           required
  //           className="p-2 rounded-lg w-[70%] me-4"
  //           name="hour"
  //         />
  //         <button
  //           type="submit"
  //           className="bg-[#1d1d1d] text-[#fff] py-2 px-5 rounded-lg my-2 w-max"
  //         >
  //           Book Now
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };
  const BubbleForProviderDetails = ({ selectedWorker, setShowDetails }) => {
    const handleOnBook = async (e) => {
      e.preventDefault();
      const hours = e.target.hour.value;
      const Data = {
        number: selectedWorker.number,
        email: email,
        hour: hours,
        status: "Pending",
      };
  
      try {
        console.log(Data);
        // Uncomment to send booking request to the server
        await axios.post(`https://on-demand-service-m5nh.onrender.com/api/v1/new-booking`, Data);
        toast.success("You succesfully send the request for the slot! Waiting for Confirmation!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setShowDetails(false);
      } catch (error) {
        console.error("Booking failed:", error);
        toast.error("❌ Booking Failed! Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };
  
    const [isLarge, setIsLarge] = useState(window.innerWidth > 640);
  
    useEffect(() => {
      const handleResize = () => setIsLarge(window.innerWidth > 640);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div
        className={`bg-gradient-to-br from-[#f4f6ff] to-[#ffffff] shadow-2xl rounded-lg p-6 flex flex-col items-center justify-start transition-transform duration-300 ${
          isLarge
            ? "absolute top-[20%] left-[50%] translate-x-[-50%] w-[60vw] lg:w-[40vw] h-auto"
            : "fixed top-0 left-0 w-full h-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end w-full">
          <button onClick={() => setShowDetails(false)}>
            <CloseIcon
              style={{
                background: "#ffffff",
                padding: "6px",
                borderRadius: "50%",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </button>
        </div>
  
        {/* Worker Info */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full lg:space-x-6 mt-4 justify-center">
          <img
            src={selectedWorker?.avatar}
            alt="Worker"
            className="h-24 w-24 lg:h-32 lg:w-32 rounded-full object-cover border-4 border-[#80b6e0] shadow-md"
          />
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-lg lg:text-xl font-bold text-gray-800 mt-4 lg:mt-0">
              {selectedWorker?.name}
            </p>
            <p className="text-sm lg:text-md text-gray-600">@{selectedWorker?.username}</p>
          </div>
        </div>
  
        {/* Details Section */}
        <div className="p-3 w-full sm:w-3/4 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm lg:text-md">
          <div className="flex items-center text-gray-700 justify-start p-2">
            <MdWork className="text-[#507da1] mr-2 w-max" /> {selectedWorker?.work}
          </div>
          <div className="flex items-center text-gray-700 justify-start p-2"> 
            <FaPhoneAlt className="text-[#507da1] mr-2 w-max" /> {selectedWorker?.number}
          </div>
          <div className="flex items-center text-gray-700 justify-start p-2" >
            <MdEmail className="text-[#507da1] mr-2 w-max" /> {selectedWorker?.email}
          </div>
          <div className="flex items-center text-gray-700 justify-start p-2">
            <FaStar className="text-[#ffc107] mr-2 w-max" />{" "}
            {selectedWorker?.Rating || "No rating"}
          </div>
          <div className="flex items-center text-gray-700 justify-start p-2"> 
            <FaRupeeSign className="text-[#507da1] mr-2 w-max" />{" "}
            ₹{selectedWorker?.price || "N/A"} per hour
          </div>
          <div className="flex items-center text-gray-700 justify-start p-2">
            {selectedWorker?.totalWork || "No work details"}
          </div>
        </div>
  
        {/* Booking Form */}
        <form
          onSubmit={handleOnBook}
          className="w-full mt-6 flex flex-col items-center"
        >
          <input
            type="number"
            name="hour"
            placeholder="Hours to book"
            required
            className="p-3 w-full sm:w-3/4 rounded-lg border border-[#d1e3f1] focus:outline-none focus:ring-2 focus:ring-[#80b6e0] mb-4"
          />
          <button
            type="submit"
            className="bg-[#10375c] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#40688a] transition-all duration-200"
          >
            Book Now
          </button>
        </form>
      </div>
    );
  };
  

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  return (
    <div style={{ minHeight: "90vh" }} className="bg-[#fafafa]">
      {showDetails && (
        <BubbleForProviderDetails
          selectedWorker={selectedWorker}
          setShowDetails={setShowDetails}
        />
      )}

      <div className="flex justify-center items-center p-10">
        <div>
          <h1 className="text-3xl font-bold text-center sm:text-left font-mono">
            Book🧾 the Service ⚙️
          </h1>
          <p className="text-lg font-base text-center sm:text-left text-gray-400">
            Get the best service by qualified workers.
          </p>
          <div className="flex flex-wrap items-center justify-center">
            {data.length === 0 ? (
              <p className="text-center text-lg font-semibold">
                No Workers Available.
              </p>
            ) : (
              data.map((item) => <Card item={item} key={item._id} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
