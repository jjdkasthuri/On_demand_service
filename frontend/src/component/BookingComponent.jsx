import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import IconButton from "@mui/material/IconButton";

const BookingComponent = ({item}) => {
  return (
    <>
      <div className=" bg-red-100 p-6 rounded-lg my-2 w-80 justify-center mx-4">
        <h2 className="text-xl font-bold font-mono items-center flex">
          <PeopleAltOutlinedIcon className="me-2" />
          {item.name}
        </h2>
        <p className="text-lg  items-center flex text-gray-600">
          <WorkOutlineOutlinedIcon className="me-2" />
          {item.work}
        </p>
        <p className=" items-center flex text-gray-600">
          <LocalPhoneOutlinedIcon className="me-2" /> {item.number}
        </p>
        <p className=" items-center flex text-gray-600">
          <StarBorderOutlinedIcon className="me-2" /> {item.Rating}
        </p>
        <IconButton aria-label="delete" className="w-max">
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      </div>
    </>
  );
};

export default BookingComponent;
