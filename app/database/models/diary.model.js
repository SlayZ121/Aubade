import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const DiaryEntrySchema = new mongoose.Schema(
  {
    pageNumber: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: { createdAt: "_createdAt", updatedAt: "_updatedAt" },
    versionKey: false,
  }
);

const DiarySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    user: {
      type: String,
      ref: "_users",
      required: true,
    },
    pages: {
      type: [DiaryEntrySchema],
      default: [],
      validate: [arrayLimit, "{PATH} exceeds the limit of 100"],
    },
    theme: {
      type: String,
      default: "cupcake",
    },
  },
  { timestamps: false, versionKey: false }
);

function arrayLimit(val) {
  return val.length <= 100;
}
const Diaries =
  mongoose.models._diaries || mongoose.model("_diaries", DiarySchema);
export default Diaries;
