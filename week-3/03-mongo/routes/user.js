const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const User = require("../db/index");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then(() => {
      res.status(201).json({ message: "user created successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create user", error: err });
    });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find({})
    .then((courses) => {
      res.status(200).json({ courses });
    })
    .catch((err) => {
      res.status(200).json({ message: "Didn't find courses", error: err });
    });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router