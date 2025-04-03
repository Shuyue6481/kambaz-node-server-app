import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

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
