const { Item } = require("../models");
const { tokenVerifier } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  console.log("Authentication");
  const { accessToken } = req.headers;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    const decoded = tokenVerifier(accessToken);
    req.userData = decoded;
    next();
  }
};

const authorization = (req, res, next) => {
  console.log("Authorization");
  try {
    const id = +req.params.id;
  } catch (error) {}
};
