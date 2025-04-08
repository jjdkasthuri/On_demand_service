import express from "express"
const app = express();

import cors from "cors";
import { router } from "./routes/user.route.js";
import cookieParser from "cookie-parser"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors({
    origin:  "*",
    methods: ["GET", "POST", "PUT", "DELETE" , "PATCH"],
    credentials: true,
  }));
// Routes
app.use("/api/v1/",router);

export {app}
