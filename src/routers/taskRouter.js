import express from "express";
const router = express.Router();

const faketask = [];

//task api endpoints
router.get("/api/v1/task", (req, res) => {
  //Replace the faketask with the real ones from database

  res.json({
    status: "success",
    message: "you made a GET call",
    task: faketask,
  });
});

router.post("/api/v1/task", (req, res) => {
  //receving data
  faketask.push(req.body);
  console.log(req.body);
  res.json({
    message: "you made a POST call",
  });
});

router.delete("/api/v1/task", (req, res) => {
  res.json({
    message: "you made a DELETE call",
  });
});

export default router;