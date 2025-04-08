import mongoose from "mongoose";

const providerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    Rating: {
      type: Number,
      default: 0,
    },
    avatar:{
      type:String,
    },
    isAvaliable: {
      type: Boolean,
      required: true, 
    },
    price:{
      type:Number,
      required:true
    },
    totalWork:{
      type:Number, 
    }
  },
  { timestamps: true }
);



export const Provider = mongoose.model("Provider", providerSchema);
