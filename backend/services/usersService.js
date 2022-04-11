const bcrypt = require("bcrypt");

exports.hashPassword = async (plainTextPassword) => {
  const SALT_ROUNDS = 10;
  return await bcrypt.hash(plainTextPassword, SALT_ROUNDS);
};

exports.comparePasswords = async (plainTextPassword, hash) => {
  return await bcrypt.compare(plainTextPassword, hash);
};
