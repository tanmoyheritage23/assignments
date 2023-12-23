const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db/index");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    User.findOne({ username: req.body.username })
        .then((user) => {
            return user.password===req.body.password;
        }).then((isMatched) => {
            if (isMatched) {
                const token = jwt.sign({ username: req.body.username }, 'secret');
                res.status(200).json({ message: 'Sign in successful', token: token });
            } else {
                res.status(401).json({ message: 'Sign in failed' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Failed to sign in', error: err });
        });
    
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router