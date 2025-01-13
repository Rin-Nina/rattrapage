const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
// This code defines an authMiddleware function that checks if a JWT token is present in the request headers. If the token is present, it verifies the token using the JWT_SECRET environment variable and extracts the user ID from the token. The user ID is then added to the request object, and the next middleware function is called. If the token is invalid or missing, an error response is sent back to the client.
