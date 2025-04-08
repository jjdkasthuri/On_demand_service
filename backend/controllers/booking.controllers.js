import mongoose from "mongoose";
import {User} from "../models/user.model.js"
import {Booking} from "../models/booking.model.js"
import { Provider } from "../models/provider.model.js";

const newBookingController = async(req,res) =>{
    try {
        const {email , number , hour , status} = req.body;
        if(!email || !number){
            return res.status(400).json({message : "Please fill in all fields"})
        }
        const newBooking = new Booking({
            who:email,
            whom :number,
            hour:hour,
            status: status,
        })
        await newBooking.save();
        console.log(newBooking);
        res.status(201).json({message : "Booking created successfully",newBooking})
        
    } catch (error) {
        console.log(error , "error in booking new slot")
        
    }
}

const showAllBookingController = async (req, res) => {
  try {
    const { email } = req.params;
    const bookings = await Booking.find({ who: email });

    const allList = [];
    
    for (const eachPro of bookings) {
      const num = eachPro.whom;
      const provider = await Provider.findOne({ number: num });
      if(eachPro.status){
        allList.push({provider , status: eachPro.status , bookingid: eachPro._id,  booking : eachPro })
      }
    
    }

    res.status(200).json(allList); 
  } catch (error) {
    console.error("Error in showing all bookings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const rateProviderController = async (req, res) => {
  try {
    const { Rating, review, bookingid, number, email } = req.body;

    if (!Rating || !review || !bookingid || !number || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = await Booking.findById(bookingid);

    if (!booking) {
      return res.status(404).json({ message: "No booking found with the provided details" });
    }

    booking.Rating = Rating;
    booking.review = review;

    await booking.save({ validateBeforeSave: false });

    res.status(200).json({
      message: "Rating and review added successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Error in rating provider:", error);

    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
      error: error.message,
    });
  }
};

const changeStatusController = async(req,res) =>{
  try {
    const {bookingid,status} = req.body;
    // console.log(bookingid,status)
    const booking = await Booking.findById(bookingid);
    if(!booking){
      return res.status(404).json({message:"No booking found with the provided details"})
    }
    booking.status = status;
    await booking.save({validateBeforeSave:false});
    res.status(200).json({message:"Status changed successfully",data:booking})
    
  } catch (error) {
    console.error("Error in changing success status:", error);
  }
}






export {newBookingController , showAllBookingController , rateProviderController , changeStatusController}