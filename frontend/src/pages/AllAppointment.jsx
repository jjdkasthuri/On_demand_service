// import React, { useEffect, useState } from "react";
// import NavPro from "../component/NavPro";
// import Footer from "../component/Footer";
// import HistAppointment from "../component/HistAppointment";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const AllAppointment = () => {
//   const { email, people } = useParams();
//   const [booking, setBooking] = useState([]);
//   const [filteredBooking, setFilteredBooking] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       setLoading(true); // Set loading to true before fetching data
//       try {
//         const allBooking = await axios.get(
//           `https://on-demand-service-m5nh.onrender.com/api/v1/provider-all-appointment/${email}`
//         );
//         setBooking(allBooking.data);
//         setFilteredBooking(allBooking.data); // Set all bookings by default
//         console.log(allBooking.data);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       } finally {
//         setLoading(false); // Reset loading after fetch is done
//       }
//     };
//     fetchBookings();
//   }, [email]);

//   // Filter bookings based on their status
//   const handleFilter = (status) => {
//     if (status === "completed") {
//       setFilteredBooking(booking.filter(item => item.status === "completed"));
//     } else if (status === "failed") {
//       setFilteredBooking(booking.filter(item => item.status === "failed"));
//     } else {
//       setFilteredBooking(booking); // Reset to all bookings
//     }
//   };

//   return (
//     <div>
//       <NavPro
//         val1="Home"
//         val2="Appointment"
//         val3="Transactions"
//         val4="Logout"
//         email={email}
//         people={people}
//       />
//       <div className="sm:p-24 p-8 bg-[#fff7e1]" style={{ minHeight: "90vh" }}>
//         <h1 className="text-3xl font-mono font-semibold mb-2">All Bookings</h1>
//         <h1 className="text-lg font-mono font-light text-gray-300 my-4">
//           Here are all your bookings 🧾
//         </h1>
//         <div className="flex justify-center">
//           <div className="flex flex-wrap justify-center">
//             <div className="flex justify-center my-3">
//               <button
//                 className="text-center text-xl font-medium bg-green-400 p-2 text-white rounded w-max mx-4"
//                 onClick={() => handleFilter("completed")}
//               >
//                 Completed ✅
//               </button>
//               <button
//                 className="text-center text-xl font-medium bg-red-400 p-2 text-white rounded w-max mx-4"
//                 onClick={() => handleFilter("failed")}
//               >
//                 Failed ❌
//               </button>
//               <button
//                 className="text-center text-xl font-medium bg-gray-400 p-2 text-white rounded w-max mx-4"
//                 onClick={() => handleFilter("all")}
//               >
//                 All 🗂
//               </button>
//             </div>
//             <br />
//             {loading ? (
//               <p className="text-center font-semibold text-lg">Loading...</p>
//             ) : filteredBooking.length === 0 ? (
//               <p className="text-center font-semibold text-lg">
//                 No bookings available for the selected filter.
//               </p>
//             ) : (
//               filteredBooking.map((item) => (
//                 <HistAppointment item={item} key={item._id} />
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AllAppointment;
