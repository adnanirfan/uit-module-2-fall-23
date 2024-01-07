import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: [true, "please provide the email"],
      unique: true,
    },
    todos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.model["User"] || mongoose.model(`User`, userSchema);
