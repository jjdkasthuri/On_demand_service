import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    who: {
      type: String,
      required: true,
    },
    whom: {
      type: String, 
      required: true,
    },
    hour:{
      type: Number,
      required: true,
    },
    status :{
      type: String,
      enum : ["Success","Failed","Pending"],
    },
    review:{
      type:String,
    },
    Rating:{
      type :Number
    }
  },
  {
    timestamps: true,
  }
);


export const Booking = mongoose.model("Booking", bookingSchema);
