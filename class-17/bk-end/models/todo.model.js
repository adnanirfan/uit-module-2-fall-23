import mongoose from "mongoose";
import { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    task: {
      type: String,
      require: [true, "please provide the task"],
    },
    status: {
      type: Boolean,
      require: [true, "please provide the status"],
    },
    user_id: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Todo =
  mongoose.model["Todo"] || mongoose.model(`Todo`, todoSchema);
