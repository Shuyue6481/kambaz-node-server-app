import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enroll", async (req, res) => {
    const enrollment = req.body;
    const newEnrollment = enrollmentsDao.createEnrollment(enrollment);
    res.send(newEnrollment);
  });

  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await enrollmentsDao.findAllEnrollments();
    res.send(enrollments);
  });

  app.delete("/api/unenroll/:enrollmentId", async (req, res) => {
    const { enrollmentId } = req.params;
    const status = await enrollmentsDao.deleteEnrollment(enrollmentId);
    res.send(status);
  });

  app.get("/api/enrollments/current", async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.status(401).json({ message: "User not logged in" });
      return;
    }
    const userId = currentUser._id;
    const enrollments = await enrollmentsDao.findEnrollmentsByUser(userId);
    res.send(enrollments);
  });
}
