import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
  //whenever we create any user it gonna create, createdat and updatedat time
);

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);