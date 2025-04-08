import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

const BookingComponent = ({ item }) => {
  const provider = item.provider;
  const status = item.status;
  const dateTimeString = item.booking.createdAt;
  const dateObject = new Date(dateTimeString);
  const date = dateObject.toISOString().split("T")[0];
  const time = dateObject.toISOString().split("T")[1].split(".")[0];
  const ds = new Date(date);
  const day = ds.getDate();
  const monthName = dateObject.toLocaleString("default", { month: "long" });
  const year = ds.getFullYear();
  const formattedDate = `${day} ${monthName} ${year}`;
  const [hours, minutes, seconds] = time.split(":");
  let hourIn12HourFormat = parseInt(hours);
  const amPm = hourIn12HourFormat >= 12 ? "PM" : "AM";

  if (hourIn12HourFormat > 12) {
    hourIn12HourFormat -= 12;
  } else if (hourIn12HourFormat === 0) {
    hourIn12HourFormat = 12;
  }
  const formattedTime = `${hourIn12HourFormat}:${minutes} ${amPm}`;

  const statusColors = {
    Pending: "bg-blue-500",
    Failed: "bg-red-500",
    Success: "bg-green-600",
  };

  const statusClass = statusColors[status] || "bg-gray-500"; // Default to gray if status is unknown

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col xl:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      {/* Provider Info */}
      <div className="flex flex-col items-center justify-center shadow-md rounded-lg p-4 bg-orange-50 w-full xl:mb-0 mb-2 xl:w-1/3">
        <div className="flex items-center justify-center">
          <img
            src={provider.avatar}
            alt="Provider Avatar"
            className="h-24 w-24 rounded-full border-4 border-orange-300 mb-3"
          />
        </div>
        <div className="flex items-center justify-center mb-3">
          <PeopleAltOutlinedIcon className="text-primary text-2xl mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">{provider.name}</h2>
        </div>
      </div>

      {/* Booking Details */}
      <div className="flex flex-col items-start gap-y-2 w-full md:w-2/3">
        <div className="flex items-center text-gray-600">
          <WorkOutlineOutlinedIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base font-medium">{provider.work}</p>
        </div>

        <div className="flex items-center text-gray-600">
          <LocalPhoneOutlinedIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base font-medium">{provider.number}</p>
        </div>

        <div className="flex items-center text-gray-600">
          <StarBorderOutlinedIcon className="text-yellow-500 text-lg mr-2" />
          <p className="text-base font-medium">{provider.Rating} / 5</p>
        </div>

        <div className="flex items-center text-gray-600">
          <DateRangeOutlinedIcon className="text-lg mr-2" />
          <p className="text-base font-medium">{formattedDate}</p>
        </div>

        <div className="flex items-center text-gray-600">
          <TimerOutlinedIcon className="text-lg mr-2" />
          <p className="text-base font-medium">{formattedTime}</p>
        </div>

        {/* Status */}
        <div className="flex justify-start w-full">
          <p className={`${statusClass} px-4 py-1 w-max text-white rounded-full font-semibold capitalize text-sm`}>
            {status === "Pending" ? "In Progress" : status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
