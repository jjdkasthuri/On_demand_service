import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import BookingPro from "../bookingPro/BookingPro";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import {
  MdSmsFailed,
  MdPending,
  MdOutlineClearAll,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import NavPro from "../component/NavPro";

const AllProviderAppointment = () => {
  const { email, people } = useParams();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [filteredStatus, setFilteredStatus] = useState(""); // Current filter status
  const [booking, setBooking] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [whichToShow, setWhichToShow] = useState("a");
  const [error, setError] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState("All");

  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://on-demand-service-m5nh.onrender.com/api/v1/show-profile/${email}`
  //       );
  //       setProfileData(response.data);

  //     } catch (err) {
  //       setError("Error loading profile data. Please try again.");
  //       console.error("Error loading profile data", err);
  //     }
  //   };

  //   const fetchBookings = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://on-demand-service-m5nh.onrender.com/api/v1/provider-all-appointment/${email}`
  //       );
  //       setBooking(response.data);
  //       console.log(response.data)
  //       setFilteredBookings(response.data);
  //     } catch (err) {
  //       setError("Error fetching bookings. Please try again.");
  //       console.error("Error fetching bookings:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProfileData();
  //   fetchBookings();
  // }, [email , people ]);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `https://on-demand-service-m5nh.onrender.com/api/v1/show-profile/${email}`
        );
        setProfileData(response.data);
      } catch (err) {
        setError("Error loading profile data. Please try again.");
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `https://on-demand-service-m5nh.onrender.com/api/v1/provider-all-appointment/${email}`
        );
        setBooking(response.data);
        setFilteredBookings(response.data); // Initial state
      } catch (err) {
        setError("Error fetching bookings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
    fetchBookings();
    // console.log(filterBookings)
  }, [email]);

  const filterBookings = (status) => {
    if (status === filteredStatus) return;

    let filtered;
    if (status === "Success") {
      filtered = booking.filter((b) => b.status === "Success");
    } else if (status === "Failed") {
      filtered = booking.filter((b) => b.status === "Failed");
    } else if (status === "Pending") {
      filtered = booking.filter((b) => b.status === "Pending");
    } else {
      filtered = booking;
    }
    setFilteredBookings(filtered);
    setFilteredStatus(status);
  };

  // console.log(booking)

  const FullClientBookingDashboard = ({ setting }) => (
    <div className="sm:flex hidden min-h-screen  bg-gray-800 flex-col justify-between gap-y-8 border-r border-gray-300 p-5">
      <div className="flex flex-col justify-start gap-y-6 mt-10">
        <button
          onClick={() => {
            setting("a");
            filterBookings("all");
          }}
          className={`p-2 rounded-sm flex justify-start items-center ${
            whichToShow === "a"
              ? "bg-orange-500 text-white"
              : "text-slate-300 hover:text-white"
          }`}
        >
          <MdOutlineClearAll className="me-2 w-max text-2xl text-white" /> All
          Bookings
        </button>
        <button
          onClick={() => {
            setting("b");
            filterBookings("Pending");
          }}
          className={`p-2 rounded-sm flex justify-start items-center ${
            whichToShow === "b"
              ? "bg-orange-500 text-white"
              : "text-slate-300 hover:text-white"
          }`}
        >
          <MdPending className="me-2 w-max text-2xl text-white " /> Pending
        </button>
        <button
          onClick={() => {
            setting("c");
            filterBookings("Failed");
          }}
          className={`p-2 rounded-sm flex justify-start items-center ${
            whichToShow === "c"
              ? "bg-orange-500 text-white"
              : "text-slate-300 hover:text-white"
          }`}
        >
          <MdSmsFailed className="me-2 w-max text-white text-2xl" /> Failed
        </button>
        <button
          onClick={() => {
            setting("d");
            filterBookings("Success");
          }}
          className={`p-2 rounded-sm flex justify-start items-center ${
            whichToShow === "d"
              ? "bg-orange-500 text-white"
              : "text-slate-300 hover:text-white"
          }`}
        >
          <TiTick className="me-2 w-max text-white text-2xl" /> Completed
        </button>
      </div>

      <div className="flex flex-col items-center mt-10 text-slate-200">
        <img
          src={profileData?.avatar}
          alt="Profile"
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />
        <p className="text-xl font-medium mt-4 text-center">
          {profileData?.name}
        </p>
        <p className="text-gray-500 mb-14 text-base text-center">
          {profileData?.username}
        </p>
      </div>
    </div>
  );

  // const FullClientBookingDashboard = ({ setting }) => (
  //   <div className="sm:flex hidden min-h-[90vh] bg-gray-800 flex-col justify-between gap-y-8 border-r border-gray-300 p-5">
  //     <div className="flex flex-col justify-start gap-y-6 mt-10">
  //       <button
  //         onClick={() => {
  //           setBookingStatus("All");
  //         }}
  //         className="p-2 text-slate-300 hover:text-white rounded-sm  flex justify-start items-center"
  //       >
  //         <MdOutlineClearAll className="me-2 w-max text-2xl text-white" /> All
  //         Bookings
  //       </button>
  //       <button
  //         onClick={() => {
  //           setBookingStatus("Pending");
  //         }}
  //         className="p-2 text-slate-300 hover:text-white rounded-sm  flex justify-start items-center"
  //       >
  //         <MdPending className="me-2 w-max text-2xl text-white " /> Pending
  //       </button>
  //       <button
  //         onClick={() => {
  //           setBookingStatus("Failed");
  //         }}
  //         className="p-2 text-slate-300 hover:text-white rounded-sm  flex justify-start items-center"
  //       >
  //         <MdSmsFailed className="me-2 w-max text-white text-2xl" /> Failed
  //       </button>
  //       <button
  //         onClick={() => {
  //           setBookingStatus("Completed");
  //         }}
  //         className="p-2 text-slate-300 hover:text-white rounded-sm  flex justify-start items-center"
  //       >
  //         <TiTick className="me-2 w-max text-white text-2xl" /> Completed
  //       </button>
  //     </div>

  //     <div className="flex flex-col items-center mt-10 text-slate-200">
  //       <img
  //         src={profileData?.avatar}
  //         alt="Profile"
  //         className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
  //       />
  //       <p className="text-xl font-medium mt-4 text-center">
  //         {profileData?.name}
  //       </p>
  //       <p className="text-gray-500 text-base text-center">
  //         {profileData?.username}
  //       </p>
  //     </div>
  //   </div>
  // );

  // const MobileClientBookingDashboard = ({ setting }) => {
  //   return (
  //     <div className="w-full sm:hidden fixed top-[9vh]">
  //       <button
  //         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  //         className="w-max p-2 flex justify-start"
  //         aria-label="Toggle menu"
  //       >
  //         <IoMdMenu size={30} />
  //       </button>

  //       {mobileMenuOpen && (
  //         <div className="bg-gray-800 text-slate-200 p-4 fixed min-h-[92vh] w-[50vw] flex flex-col justify-between">
  //           <button
  //             onClick={() => setMobileMenuOpen(false)}
  //             className="self-end p-2"
  //             aria-label="Close menu"
  //           >
  //             <MdClose size={30} />
  //           </button>

  //           <div className="flex flex-col justify-start gap-y-8">
  //             <div className="p-2 hover:bg-[#1f1f1f9a]">
  //               <button
  //                 onClick={() => {
  //                   setting("a");
  //                   filterBookings("All");
  //                 }}
  //                 className={`p-2 rounded-sm flex justify-start items-center ${
  //                   whichToShow === "a"
  //                     ? "bg-orange-500 text-white"
  //                     : "text-slate-300 hover:text-white"
  //                 }`}
  //                 aria-label="All bookings"
  //               >
  //                 <MdOutlineClearAll className="me-2" />
  //                 All Bookings
  //               </button>
  //             </div>
  //             <div className="p-2 hover:bg-[#1f1f1f9a]">
  //               <button
  //                 onClick={() => {
  //                   setting("b");
  //                   filterBookings("Pending");
  //                 }}
  //                 className={`p-2 rounded-sm flex justify-start items-center ${
  //                   whichToShow === "b"
  //                     ? "bg-orange-500 text-white"
  //                     : "text-slate-300 hover:text-white"
  //                 }`}
  //                 aria-label="Pending bookings"
  //               >
  //                 <MdPending className="me-2" />
  //                 Pending
  //               </button>
  //             </div>
  //             <div className="p-2 hover:bg-[#1f1f1f9a]">
  //               <button
  //                 onClick={() => {
  //                   setting("c");
  //                   filterBookings("Failed");
  //                 }}
  //                 className={`p-2 rounded-sm flex justify-start items-center ${
  //                   whichToShow === "c"
  //                     ? "bg-orange-500 text-white"
  //                     : "text-slate-300 hover:text-white"
  //                 }`}
  //                 aria-label="Failed bookings"
  //               >
  //                 <MdSmsFailed className="me-2" />
  //                 Failed
  //               </button>
  //             </div>
  //             <div className="p-2 hover:bg-[#1f1f1f9a]">
  //               <button
  //                 onClick={() => {
  //                   setting("d");
  //                   filterBookings("Success");
  //                 }}
  //                 className={`p-2 rounded-sm flex justify-start items-center ${
  //                   whichToShow === "d"
  //                     ? "bg-orange-500 text-white"
  //                     : "text-slate-300 hover:text-white"
  //                 }`}
  //                 aria-label="Completed bookings"
  //               >
  //                 <TiTick className="me-2" />
  //                 Completed
  //               </button>
  //             </div>
  //           </div>

  //           <div className="flex p-2 text-center flex-col justify-center items-center">
  //             <div className="flex justify-center">
  //               <img
  //                 src={profileData?.avatar || "default-avatar.png"}
  //                 alt="Profile"
  //                 className="w-20 h-20 rounded-[50%]"
  //               />
  //             </div>
  //             <div className="flex flex-col justify-center items-center">
  //               <p className="text-lg font-medium">
  //                 {profileData?.name || "Guest"}
  //               </p>
  //               <p className="text-base mb-20">
  //                 {profileData?.username || "guest123"}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
  const MobileDashboardMenu = ({ setting }) => {
    return (
      <div className="w-full sm:hidden fixed top-[9vh]">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-max p-2 flex justify-start"
        >
          <IoMdMenu size={30} />
        </button>

        {mobileMenuOpen && (
          <div className="bg-gray-800 text-slate-200 p-4 fixed min-h-[92vh] w-[50vw] flex flex-col justify-between">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="self-end p-2"
            >
              <MdClose size={30} />
            </button>

            <div className="flex flex-col justify-start gap-y-8">
              {["All", "Pending", "Failed", "Success"].map((status, idx) => (
                <button
                  key={status}
                  onClick={() => {
                    setting(status.toLowerCase()[0]);
                    filterBookings(status);
                  }}
                  className={`p-2 rounded-sm flex justify-start text-nowrap items-center ${
                    whichToShow === status.toLowerCase()[0]
                      ? "bg-orange-500 text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {status === "All" ? (
                    <MdOutlineClearAll className="me-2 w-max" />
                  ) : status === "Pending" ? (
                    <MdPending className="me-2 w-max" />
                  ) : status === "Failed" ? (
                    <MdSmsFailed className="me-2 w-max" />
                  ) : (
                    <TiTick className="me-2 w-max" />
                  )}
                  {status} 
                </button>
              ))}
            </div>

            <div className="flex flex-col items-center mt-10 text-slate-200">
              <img
                src={profileData?.avatar}
                alt="Profile"
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
              <p className="text-xl font-medium mt-4 text-center">
                {profileData?.name}
              </p>
              <p className="text-gray-500 mb-20 text-base text-center">
                {profileData?.username}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <NavPro
        val1="Home"
        val2="Appointments"
        val3="Transactions"
        val4="Logout"
        email={email}
        people={people}
      />
      <div className="bg-[#fafafa]" style={{ minHeight: "90vh" }}>
        <MobileDashboardMenu setting={setWhichToShow} />

        <div className="flex">
          <div className="xl:w-[15%] lg:w-[20%] sm:w-[30%] fixed hidden sm:block">
            <FullClientBookingDashboard setting={setWhichToShow} />
          </div>
          <div className="xl:w-[85%] lg:w-[80%] sm:w-[70%] w-full p-10 xl:ms-[15%] lg:ms-[20%] sm:ms-[30%]">
            <h1 className="text-3xl font-mono font-semibold text-[#e76f51] mb-4">
              Bookings Dashboard
            </h1>
            <h2 className="text-lg font-mono font-light text-[#2d2d2d] mb-8">
              Here are your bookings 🧾
            </h2>

            {error && (
              <div className="text-center text-red-500">
                <p>{error}</p>
              </div>
            )}

            {loading ? (
              <div className="flex justify-center items-center">
                <div
                  className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full text-[#e76f51]"
                  role="status"
                >
                  <span className="visually-hidden">.</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-20 ">
                {filteredBookings.length === 0 ? (
                  <p className="text-center font-semibold text-lg text-gray-500 col-span-3">
                    No bookings available in this category.
                  </p>
                ) : (
                  filteredBookings
                    .slice()
                    .reverse()
                    .map((item, id) => <BookingPro item={item} key={id} />)
                )}
              </div>
            )}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProviderAppointment;
