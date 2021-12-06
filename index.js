// const express = require("express");
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
const app = express();
const PORT = process.env.PORT || 5000;

const url = `mongodb+srv://prasanna:prasanna98@cluster0.nx947.mongodb.net/bookingtickets`;
// ||
// "mongodb://localhost/BookMyShow";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (request, respone) => {
  respone.send("Welcome to bookmyshow!!!! Hi Guys");
});

app.use("/users", userRouter);

app.listen(PORT, () => console.log("The server is started in " + PORT));
