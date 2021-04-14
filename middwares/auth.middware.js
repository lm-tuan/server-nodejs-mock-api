const jwt = require("jsonwebtoken");

module.exports.middlewareCheck= (req, res, next) => {
  let token = req.headers.access_token;
  if (token) {
    jwt.verify(token.slice(7), 'foobar568158558', (err, decoded) => {
      if (err) {
        res.status(403)  
        return res.json({ token: false, message: "invalid token" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401)  
    res.send({
      token: false,
      message: "No token provided."
    });
  }
};