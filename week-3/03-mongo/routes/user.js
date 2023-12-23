const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const User = require("../db/index");

// User Routes
app.post("/signup", (req, res) => {
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

app.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find({})
    .then((courses) => {
      res.status(200).json({ courses });
    })
    .catch((err) => {
      res.status(200).json({ message: "Didn't find courses", error: err });
    });
});

app.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

app.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});
