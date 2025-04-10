import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    availableUntilDate: Date,
    dueDate: Date,
    points: Number, 
    availableFromDate:Date
  },
  { collection: "assignments" }
);

export default schema;