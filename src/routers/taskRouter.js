import express from "express";
import { insertTask } from "../models/task/TaskList.model.js";
const router = express.Router();

const faketask = [];

//task api endpoints
router.get("/", (req, res) => {
  //Replace the faketask with the real ones from database

  res.json({
    status: "success",
    message: "you made a GET call",
    task: faketask,
  });
});

router.post("/", (req, res) => {
  //receving data
  faketask.push(req.body);

  const result = insertTask(req.body);
  res.json({
    message: "you made a POST call",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "you made a DELETE call",
  });
});

export default router;
