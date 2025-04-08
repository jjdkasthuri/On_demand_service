import React, { useState, useEffect } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailIcon from "@mui/icons-material/Email";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import axios from "axios";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Bounce, toast } from "react-toastify";
import { useParams } from "react-router-dom";

const BookingPro = ({ item }) => {
  const { email } = useParams();
  const [show, setShow] = useState(false);
  const provider = item.user;
  const status = item.status;
   
  console.log(item)

  useEffect(() => {
    setShow(status === "Pending");
  }, [status]);

  const handleonClick = async (item, stat) => {
    try {
      const Data = {
        status: stat,
        bookingid: item.bookingid,
      };
      const sendData = {
        bookingid: item.bookingid,
        senderMail: email,
        receiverMail: item.user.email,
      };
      console.log(Data);
      console.log(sendData);

      const response = await axios.patch(
        `https://on-demand-service-m5nh.onrender.com/api/v1/change-status`,
        Data
      );
      if (stat === "Success") {
        await axios.post(
          `https://on-demand-service-m5nh.onrender.com/api/v1/send-email`,
          sendData
        );
        console.log(sendData);
        toast.success("🦄 Confirmation mail sent Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      console.log(response.data);
      setShow(false);
      toast.success("🦄 You have Successfully choosed the options!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error(error);
      toast.error("🦄 Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // Format the date and time directly
  const dateTimeString = item.booking.createdAt;
  const dateObject = new Date(dateTimeString);
  const day = dateObject.getDate();
  const monthName = dateObject.toLocaleString("default", { month: "long" });
  const year = dateObject.getFullYear();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  const hourIn12HourFormat = hours % 12 || 12;

  const appointedHourColor =
    hours >= 9 && hours <= 17
      ? "bg-blue-500" 
      : "bg-gray-500";

  const formattedDate = `${day} ${monthName} ${year}`;
  const formattedTime = `${hourIn12HourFormat}:${minutes} ${amPm}`;

  // Determine status color
  const statusColors = {
    Pending: "bg-blue-500",
    Failed: "bg-red-500",
    Success: "bg-green-600",
  };
  const statusClass = statusColors[status] || "bg-gray-500";

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col md:grid md:grid-cols-2 md:gap-2">
      <div className="flex justify-center items-center flex-col">
        <img
          src={provider.avatar}
          alt="Provider Avatar"
          className="h-24 w-24 rounded-full mx-auto border-4 border-orange-300 mb-4"
        />
        <div className="flex items-center justify-center w-max mt-2">
          <PeopleAltOutlinedIcon className="text-primary text-2xl mr-2" />
          <h2 className="text-xl font-semibold text-gray-800 truncate">{provider.name}</h2>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-y-1">
        <div className="flex items-center text-gray-600 mb-1">
          <WorkOutlineOutlinedIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base truncate">{provider.people}</p>
        </div>

        <div className="flex items-center text-gray-600 mb-1">
          <EmailIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base truncate">{provider.email}</p>
        </div>

        <div className="flex items-center text-gray-600 mb-1">
          <DateRangeOutlinedIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base truncate">{formattedDate}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-1">
          <AccessTimeOutlinedIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base truncate">{item.booking.hour}</p>
        </div>

        <div className="flex items-center text-gray-600 mb-1">
          <TimerOutlinedIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base">
            <span className={`${appointedHourColor} px-2 py-1 rounded text-white`}>
              {formattedTime}
            </span>
          </p>
        </div>

        <div className="flex justify-start">
          <p className={`${statusClass} px-3 py-1 text-white w-max rounded-full`}>
            {status === "Pending" ? "In Progress" : status}
          </p>
        </div>

        {show && (
          <div className="flex gap-4 mt-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg w-full md:w-auto"
              onClick={() => handleonClick(item, "Success")}
            >
              Accept
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg w-full md:w-auto"
              onClick={() => handleonClick(item, "Failed")}
            >
              Decline
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPro;
