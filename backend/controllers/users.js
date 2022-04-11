const User = require("../models/User");
exports.addUser = (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => res.status(400).json({ error }));
};
