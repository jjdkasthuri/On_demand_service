import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { Provider } from "../models/provider.model.js";
import { Booking } from "../models/booking.model.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import bcrypt from "bcryptjs";

const providerRegisterController = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    const { work, number, isAvaliable ,price} = req.body;
    if (!work || !number || typeof isAvaliable === "undefined") {
      return res
        .status(400)
        .json({ message: "Please fill all required fields." });
    }

    const existingProvider = await Provider.findOne({ number });
    if (existingProvider) {
      return res
        .status(409)
        .json({ message: "Provider with this number already exists." });
    }

    const rating = 4;

    // Create a new Provider instance
    const provider = new Provider({
      name: user.name,
      username: user.username,
      email,
      work,
      avatar: user.avatar || undefined, 
      number,
      isAvaliable,
      price:price,
      Rating: rating,
    });

    // Save the provider to the database
    await provider.save();

    return res.status(201).json({
      message: "Provider created successfully.",
      provider: {
        id: provider._id,
        name: provider.name,
        username: provider.username,
        email: provider.email,
        work: provider.work,
        avatar: provider.avatar,
        number: provider.number,
        isAvaliable: provider.isAvaliable,
        price: provider.price,
      },
    });
  } catch (error) {
    console.error("Error in providerRegisterController:", error.message);
    return res
      .status(500)
      .json({ message: "An internal server error occurred." });
  }
};

const allAppointmentController = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const provider = await Provider.findOne({ email });
    if (!provider) {
      return res.status(404).json({ message: "Provider doesn't exist." });
    }

    const whom = provider.number

    const appointments = await Booking.find({ whom });

    const allList = [];
    for (const eachUser of appointments) {
      const mail = eachUser.who;
      const user = await User.findOne({ email: mail });
      if(user.status){
        allList.push({user,status: eachUser.status , bookingid: eachUser._id,booking : eachUser });

      }
      allList.push({user, bookingid: eachUser._id , status: eachUser.status ,booking : eachUser  });

    }

    return res.status(200).json(
      allList,
    );
  } catch (error) {
    console.error("Error in allAppointmentController:", error.message);
    return res
      .status(500)
      .json({ message: "An internal server error occurred." });
  }
};

const profileProviderController = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }
    const provider = await Provider.findOne({ email });
    if (!provider) {
      return res.status(404).json({ message: "Provider doesn't exist." });
    }
    return res.status(201).json({ message: "Provider details.", provider });
  } catch (error) {
    console.error("Error in profileProviderController:", error.message);
  }
};

const updateAvatar = async (file) => {
  if (!file) return null;
  const avatarPath = file.path;
  const avatar = await uploadCloudinary(avatarPath);
  return avatar ? avatar : null;
};

const updateProviderDetailsController = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const provider = await Provider.findOne({ email });
    if (!provider) {
      return res.status(404).json({ message: "Provider doesn't exist." });
    }

    const { work, username, password ,id } = req.body;
    console.log(username,work , id)
    const avatar = await updateAvatar(req.file);

    if (username) {
      provider.username = username;
    }

    if (work) {
      provider.work = work;
    }

    if (avatar) {
      provider.avatar = avatar;
    }


    await provider.save({ validateBeforeSave: false });

    // Refactor user update logic to avoid duplication
    const user = await User.findById( id );
    console.log(user)
    if (user) {
      if (username) user.username = username;
      if (password) user.password = password; // Make sure to hash the password here
      if (avatar) user.avatar = avatar;

      await user.save({ validateBeforeSave: false });
    }

    const updatedProvider = await Provider.findOne({ email }).select("-password");

    return res.status(200).json({
      message: "Provider details updated successfully.",
      updatedProvider,
    });

  } catch (error) {
    console.error("Error in updateProviderDetailsController:", error.message);
    return res.status(500).json({ message: "An internal server error occurred." });
  }
};

const checkAvailController = async(req,res)=>{
  try {
    const { email } = req.params;
    const provider = await Provider.findOne({ email });
    if (!provider) {
      return res.status(400).json({ message: "Email doesnot exists." });
    }
    return res.status(200).json({ message: "Email is available." ,provider});
    
  } catch (error) {
    console.error("Error in checkAvailController:", error.message);
    
  }
}


const makeAvailableController = async(req,res)=>{
  try {
    const { email } = req.params;
    if(!email){
      return res.status(400).json({message: "Email is required."})
    }
    const provider = await Provider.findOne({ email });
    if (!provider) {
      return res.status(404).json({ message: "Provider doesn't exist." });
    }
    if( provider.isAvaliable){
      provider.isAvaliable = false
    }
    else{
      provider.isAvaliable = true
    }
    await provider.save({ validateBeforeSave: false });
    return res.status(200).json({
      message: "Provider details updated successfully.",
      provider
      });
    
  } catch (error) {
    console.error("Error in makeAvailableController:", error.message);
    return res.status(500).json({ message: "An internal server error occurred." });
  }
}

const getReviewController = async(req,res)=>{
  try {
    const { email } = req.params;
    if(!email){
      return res.status(400).json({message: "Email is required."})
    }
    const provider = await Provider.findOne({ email });
    if(!provider){
      return res.status(404).json({message: "Provider doesn't exist."})
    }
    const reviews = await Booking.find({ whom: provider.number });
    const alluser =[];
    for (const eachPro of reviews){
      const user = await User.findOne({ email: eachPro.who });
      alluser.push({user,eachPro,provider});
    }   
    return res.status(200).json({ message: "Review Fetched Successfully." , alluser});


  } catch (error) {
    console.error("Error in getReviewController:", error.message);
    return res.status(500).json({ message: "An internal server error occurred." });

  }
}

const getChartDataController = async(req,res)=>{
  try {
    const { email } = req.params;
    if(!email){
      return res.status(400).json({message: "Email is required."})
    }
    const provider = await Provider.findOne({ email });
    if(!provider){
      return res.status(404).json({message: "Provider doesn't exist."})
    }
    const data = await Booking.find({ whom: provider.number });
    const chartData = [];
    let failed = 0;
    let success = 0;
    let pending = 0;
    for (const eachPro of data){
      if(eachPro.status === "Success"){
        success++;
    }
    else if(eachPro.status === "Failed"){
      failed++;
    }
    else{
      pending++;
    }
  }
  chartData.push({
    label: "Success",
    data: success,

  })
  chartData.push({
    label: "Failed",
    data: failed,

  })
  chartData.push({
    label: "Pending",
    data: pending,
  })
  return res.json(chartData);

  } catch (error) {
    console.error("Error in getChartDataController:", error.message);
    return res.status(500).json({ message: "An internal server error occurred." });
  }
}

export {
  providerRegisterController,
  allAppointmentController,
  profileProviderController,
  updateProviderDetailsController,
  makeAvailableController,
  getReviewController,
  getChartDataController,
  checkAvailController
};
