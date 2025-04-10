import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
  // const { assignments } = Database;
  // return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
  // delete assignment._id;
  // return model.create(assignment);
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
  // const newAssignment = { ...assignment, _id: uuidv4() };
  // Database.assignments = [...Database.assignments, newAssignment];
  // return newAssignment;
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, assignmentUpdates);
  // const { assignments } = Database;
  // const assignment = assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );
  // Object.assign(assignment, assignmentUpdates);
  // return assignment;
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
  // const { assignments } = Database;
  // Database.assignments = assignments.filter(
  //   (assignment) => assignment._id !== assignmentId
  // );
}

// export const findAssignmentById = async (assignmentId) => {
//   return await model.findOne({ _id: assignmentId }).exec();
// };

export const findAssignmentById = (assignmentId) => model.findById(assignmentId);