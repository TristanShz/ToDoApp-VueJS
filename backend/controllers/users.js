const User = require("../models/User");
const userServices = require("../services/usersService");

require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
  const password = await userServices.hashPassword(req.body.password);
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: password,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).exec();
  console.log(user);
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: "Veuillez remplir les deux champs" });
  }
  if (!user)
    return res.status(400).json({
      message: `Aucun utilisateur avec l'email <${req.body.email}> dans la base de données`,
    });
  const checkPassword = await userServices.comparePasswords(
    req.body.password,
    user.password
  );
  if (checkPassword) {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.SECRET,
      { expiresIn: "3 hours" }
    );

    return res.json({ access_token: token, id: user._id });
  } else {
    return res.status(400).json({ message: "Mauvais mot de passe" });
  }
};
