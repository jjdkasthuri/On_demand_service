import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { Provider } from "../models/provider.model.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import {Booking} from "../models/booking.model.js";
import bcrypt from "bcryptjs";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerHandler = async (req, res) => {
  try {
    const { name, email, password, username, people } = req.body;

    if (!name || !email || !password || !username || !people) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    let avatarPath = req.file?.path || null;
    let cloudPath =
      avatarPath === null
        ? "https://i.pinimg.com/736x/ff/82/b6/ff82b607537ed90b2f343c643960acfa.jpg"
        : await uploadCloudinary(avatarPath);

    if (!cloudPath) {
      return res.status(400).json({ message: "Avatar upload failed." });
    }

    const user = new User({
      username,
      name,
      password,
      people,
      email,
      avatar: cloudPath,
    });

    await user.save();
    const createdUser = await User.findById(user._id).select("-password");
    res.status(201).json({ message: "User created successfully.", createdUser });
  } catch (error) {
    console.error("Error in registerHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    const isCorrectPassword = user.isPasswordCorrect(password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid email or password." });
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    const options = {
      httpOnly: true,
      secure: true,
    };
    await user.save({ validateBeforeSave: false });
    const loggedinUser = await User.findById(user._id).select(
      "-password -accesstoken"
    );
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({ accessToken, refreshToken, loggedinUser });
  } catch (error) {
    console.log(error, "in login controller");
  }
};

const profileShowController = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email })?.select("-password");
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }
    const options = {
      httpOnly: true,
      secure: true,
    };
    const bookings = await Booking.find({ who: email });
    if(bookings.length === 0){
      user.peopleHired = 0;
    }
    else{
      user.peopleHired = bookings.length;
    }
    const success = bookings.filter((booking) => booking.status === "Success");
    user.transactionMade = success.length;
    await user.save({ validateBeforeSave: false });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error, "in profile show controller");
  }
};

const updateProfileController = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const { username, password } = req.body;

    if (username) {
      user.username = username;
    }

    if (password) {
      user.password = password; // Hash the password
    }

    // Handle avatar upload
    if (req.file) {
      const avatarPath = req.file.path;
      const avatar = await uploadCloudinary(avatarPath); // Assuming this returns the Cloudinary URL
      if (!avatar) {
        return res.status(400).json({ message: "Avatar upload failed." });
      }
      user.avatar = avatar; // Save the avatar URL
    }

    await user.save({ validateBeforeSave: false }); // Optional: Use validation if necessary

    // Return the updated user without password
    const updatedUser = await User.findOne({ email }).select("-password");
    return res.status(200).json({
      message: "Profile updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in update profile controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const logoutController = async (req, res) => {
  // Clear the user session
  const { email } = req.params;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  try {
    await User.findByIdAndUpdate(
      { _id: user._id },
      {
        $unset: {
          refreshToken: 1,
        },
      },
      {
        new: true,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({ message: "User logged Out" });
  } catch (error) {
    console.log(error);
  }
};

const showGivenWorkData = async (req, res) => {
  try {
    const { work } = req.params;
    const totalProviders = Provider.find({ work });
    const totalAvailableProvider = [];
    (await totalProviders).forEach((member) => {
      if (member.isAvaliable == true) {
        totalAvailableProvider.push(member);
      }
    });
    res.status(200).json(totalAvailableProvider);
  } catch (error) {
    console.log(error);
  }
};

const getChartClientDataController = async(req,res)=>{
  try {
    const { email } = req.params;
    if(!email){
      return res.status(400).json({message: "Email is required."})
    }
   
    const data = await Booking.find({ who: email });
    if(data.length === 0){
      return res.status(404).json({message: "No data found."})
    }
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
  registerHandler,
  loginController,
  profileShowController,
  updateProfileController,
  logoutController,
  showGivenWorkData,
  getChartClientDataController
};
