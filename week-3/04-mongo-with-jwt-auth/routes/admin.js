const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const router = Router();

// Admin Routes
app.post('/signup', (req, res) => {
    // Implement admin signup logic
});

app.post('/signin', (req, res) => {
    // Implement admin signup logic
    Admin.findOne({ username: req.body.username })
        .then((admin) => {
            return admin.password===req.body.password;
        }).then((isMatched) => {
            if (isMatched) {
                const token = jwt.sign({ username: req.body.username }, 'secret');
                res.status(200).json({ message: 'Sign in successful', token: `Bearer ${token}` });
            } else {
                res.status(401).json({ message: 'Sign in failed' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Failed to sign in', error: err });
        });
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;