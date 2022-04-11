// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//load the module
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);
//last response
app.use("/", (req, res) => {
  res.json({
    message: "you have reached to ythe api of not to do list application",
  });
});

//must have part
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
