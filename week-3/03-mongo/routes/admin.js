const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const Admin = require("../db/index");
const Course = require("../db/index");
const router = Router();


// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const userName = req.body.username;
  const Password = req.body.password;

  Admin.create({ username: userName, password: Password })
    .then(() => {
      res.status(201).json({ message: "Admin created successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create admin", error: err });
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  })
    .then((createdCourse) => {
      const courseId = createdCourse._id;
      res.status(201).json({
        message: "Course created successfully",
        courseId: courseId,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create course", error: err });
    });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find({})
    .then((courses) => {
      res.status(200).json({ courses });
    })
    .catch((err) => {
      res.status(500).json({ message: "Didn't find a course", error: err });
    });
});

module.exports = router;
