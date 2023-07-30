import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string);
    mongoose.set("strictQuery", false);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("not connected");
  }
};

export default connect;
