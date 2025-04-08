import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import StarRating from "./StarRating";

const RateNReview = () => {
  const { email, people } = useParams();
  const [showDetails, setShowDetails] = useState(false);
  const [bookings, setBooking] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ratingValue, setRatingValue] = useState(2); 
  const [loading, setLoading] = useState(false); 
  const [toreview , setToReview]  = useState("Cick To Review");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true); // Start loading
        const res = await axios.get(`https://on-demand-service-m5nh.onrender.com/api/v1/all-booking/${email}`);
        const successfulBookings = res.data.filter(
          (booking) => booking.status === "Success"
        );
        setBooking(successfulBookings);
        console.log(successfulBookings)
        setLoading(false); // Stop loading

      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, [email]);

  const BookingComponent = ({ item}) => {
    const showMoreDetails = () => {
      setSelectedWorker(item.provider);
      setSelectedTime(item.bookingid);
      setShowDetails(true);
    };

    // console.log(selectedTime)

    const provider = item.provider;
    const status = item.status;
    const dateTimeString = item.provider.createdAt;
    const dateObject = new Date(dateTimeString);
    const date = dateObject.toISOString().split("T")[0];
    const time = dateObject.toISOString().split("T")[1].split(".")[0];
    const ds = new Date(date);
    const day = ds.getDate();
    const monthName = dateObject.toLocaleString("default", { month: "long" });
    const year = ds.getFullYear();
    const formattedDate = `${day} ${monthName} ${year}`;
    const [hours, minutes] = time.split(":");
    let hourIn12HourFormat = parseInt(hours);
    const amPm = hourIn12HourFormat >= 12 ? "PM" : "AM";
    if (hourIn12HourFormat > 12) hourIn12HourFormat -= 12;
    else if (hourIn12HourFormat === 0) hourIn12HourFormat = 12;
    const formattedTime = `${hourIn12HourFormat}:${minutes} ${amPm}`;

    const statusColors = {
      Pending: "bg-yellow-500",
      Failed: "bg-red-500",
      Success: "bg-green-600",
    };

    const statusClass = statusColors[status] || "bg-gray-500"; // Default to gray if status is unknown

    return (
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center items-center shadow-lg shadow-orange-50 m-2">
          <div className="flex items-center w-full">
            <img
              src={provider.avatar}
              alt="Provider Avatar"
              className="h-20 w-20 rounded-full mx-auto border-4 border-orange-300"
            />
          </div>
          <div className="flex items-center mb-3 justify-center w-max mt-3">
            <PeopleAltOutlinedIcon className="text-primary text-2xl mr-2 w-max" />
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {provider.name}
            </h2>
          </div>
          <div className="flex items-center mb-3 bg-[#4a577e] justify-center w-max mt-3 p-2 text-white rounded-lg">
            <button onClick={showMoreDetails}>{toreview}</button>
          </div>
        </div>

        <div className="flex flex-col items-start m-2 gap-y-[4px] w-full">
          <div className="flex items-center text-gray-600 mb-1 w-full">
            <WorkOutlineOutlinedIcon className="text-gray-500 text-lg mr-2" />
            <p className="text-base truncate w-full">{provider.work}</p>
          </div>

          <div className="flex items-center text-gray-600 mb-1 w-full">
            <LocalPhoneOutlinedIcon className="text-gray-500 text-lg mr-2" />
            <p className="text-base truncate w-full">{provider.number}</p>
          </div>

          <div className="flex items-center text-gray-600 mb-1 w-full">
            <StarBorderOutlinedIcon className="text-yellow-500 text-lg mr-2" />
            <p className="text-base">{provider.Rating} / 5</p>
          </div>

          <div className="flex items-center text-gray-600 mb-1 w-full">
            <DateRangeOutlinedIcon className="text-lg mr-2 w-max" />
            <p className="text-base">{formattedDate}</p>
          </div>

          <div className="flex items-center text-gray-600 mb-1 w-full">
            <TimerOutlinedIcon className="text-lg mr-2" />
            <p className="text-base">{formattedTime}</p>
          </div>

          <div className="flex justify-end w-max">
            <p className={`${statusClass} px-2 text-white rounded-xl truncate`}>{status}</p>
          </div>
        </div>
      </div>
    );
  };

  const BubbleForProviderDetails = ({ selectedWorker, setShowDetails , selectedTime }) => {
    console.log(selectedWorker)
    const handleOnBook = async (e) => {
      e.preventDefault();
      const review = e.target.review.value;
      const Data = {
        number: selectedWorker.number,
        bookingid: selectedTime,
        email: email,
        review: review,
        Rating: ratingValue,
      };

      try {
        console.log(Data)
        await axios.patch(`https://on-demand-service-m5nh.onrender.com/api/v1/rating`, Data);
        toast.success(" Rating and Review submitted!", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
        });
        setShowDetails(false);
      } catch (error) {
        console.error("Error submitting review:", error);
        toast.error("❌ Rating submission failed! Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
        });
      }
    };

    return (
      <div className="bg-gradient-to-br from-[#f4f6ff] to-[#ffffff] shadow-2xl rounded-lg p-6 flex flex-col items-center justify-start transition-transform duration-300 absolute top-[20%] left-[50%] translate-x-[-50%] w-[60vw] lg:w-[40vw] h-auto">
        <div className="flex justify-end w-full">
          <button onClick={() => setShowDetails(false)}>
            <CloseIcon
              className="w-max float-right"
              style={{
                background: "#ffffff",
                padding: "6px",
                borderRadius: "50%",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-center w-max lg:space-x-6 mt-4 justify-center">
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

        <StarRating setValue={setRatingValue} />

        <form onSubmit={handleOnBook} className="w-full mt-6 flex flex-col items-center">
          <textarea
            type="text"
            name="review"
            placeholder="Add a comment..."
            required
            className="p-3 w-full sm:w-3/4 rounded-lg border border-[#d1e3f1] focus:outline-none focus:ring-2 focus:ring-[#80b6e0] mb-4"
          />
          <button
            type="submit"
            className="bg-[#10375c] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#40688a] transition-all duration-200"
          >
            Send Now
          </button>
        </form>
      </div>
    );
  };

  const Loader = () => (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-[90vh] bg-gray-100 flex flex-col">
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl font-mono text-[#1d1d1d] text-center mb-8 p-4">
        Rate your Booked Providers ⚙️ and Give them Reviews. 📜
      </h1>

      <div>
      {loading ? (
          <Loader />
        ) : bookings.length > 0 ? (
          <div className="flex flex-wrap">
            {bookings.map((item) => {
              return <BookingComponent item={item} key={item._id} />;
            })}
          </div>
        ) : (
          <p>No successful bookings found.</p>
        )}
      </div>

      {showDetails && (
        <BubbleForProviderDetails
          selectedWorker={selectedWorker}
          setShowDetails={setShowDetails}
          selectedTime={selectedTime}
        />
      )}
    </div>
  );
};

export default RateNReview;
