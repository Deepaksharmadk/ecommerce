import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      minLength: 10,
    },
    password: {
      type: String,
      required: true,
    },

    userType: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
