const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const tokenGenerator = (payload) => {
  const { id, email, username } = payload;
  const token = jwt.sign({ id, email, username }, secretKey);
  return token;
};

const tokenVerifier = (token) => {
  const verifiedToken = jwt.verify(token, secretKey);
  return verifiedToken;
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
