import mongoose from "mongoose";

const mongoClient = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    if (conn) {
      console.log("database is conneceted");
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient;
