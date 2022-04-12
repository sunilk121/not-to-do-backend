import mongoose from "mongoose";

const taskListSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    default: "",
    minlength: 3,
    max: 30,
  },
  hr: {
    type: Number,
    required: true,
  },
});

const TaskList = mongoose.model("Task", taskListSchema);

export default TaskList;
