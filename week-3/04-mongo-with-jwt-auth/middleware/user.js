function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    try{
        const decodedToken = jwt.verify(token, 'secret');
        next();
    }catch(err){
        res.status(401).json({ message: 'Auth failed', error: err });
    }
}

module.exports = userMiddleware;