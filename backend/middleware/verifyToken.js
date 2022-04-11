const fetch = require("node-fetch");
const axio = require("axios");
const { default: axios } = require("axios");
const verifyToken = (req, res, next) => {
  const secret_key = process.env.SECRET_KEY;
  const token = req.body.token;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
  axios
    .post(url)
    .then(({ data }) => {
      console.log(data);
      next();
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = verifyToken;
