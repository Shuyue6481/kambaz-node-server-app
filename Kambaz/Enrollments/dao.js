import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
// }

export function createEnrollment(enrollment) {
  const newEnrollment = { ...enrollment, _id: uuidv4() };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}

export function deleteEnrollment(enrollmentId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment._id !== enrollmentId
  );
}

export function findEnrollmentsByUser(userId) {
  return Database.enrollments.filter((e) => e.user === userId);
}

export function findAllEnrollments() {
  return Database.enrollments;
}

export async function findCoursesForUser(userId) {
  // const enrollments = await model.find({ user: userId }).populate("course");
  // return enrollments.map((enrollment) => enrollment.course);
  const enrollments = await model
    .find({ user: userId })
    .populate("course")
    .exec();
  // console.log("Enrollments populated:", enrollments);
  return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
// export function enrollUserInCourse(user, course) {
//   return model.create({ user, course, _id: `${user}-${course}` });
// }
// export function unenrollUserFromCourse(user, course) {
//   return model.deleteOne({ user, course });
// }
export function enrollUserInCourse(user, course) {
  const newEnrollment = { user, course, _id: `${user}-${course}` };

  return model.create(newEnrollment);
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
