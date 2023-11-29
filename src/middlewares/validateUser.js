const { body, validationResult } = require('express-validator');

const validateUser = [
  body("firstname").isLength({ max: 255 }), // req.body.firstname should have no more than 255 characters
  body("lastname").isLength({ max: 255 }),
  body("email").isEmail(), // req.body.email should be a valid email
  body("city").isLength({ max: 255 }),
  body("language").isLength({ max: 255 }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

module.exports = validateUser;