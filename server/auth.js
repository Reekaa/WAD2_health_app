const jwt = require('jsonwebtoken');

const secret = 'mysupersecretkey';

const withAuth = (req, res, next) => {
  console.log(req.headers.cookie);
  const token  = req.headers.cookie;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.data = decoded;
        next();
      }
    });
  }
};
module.exports = withAuth;
