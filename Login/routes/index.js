const router = require("express").Router();
const base = "api";
const version = "v1";

router.get(`/${base}`, (req, res) => {
  res.json({message: "Web API"});
});

const itemRouter = require("./item");
const userRouter = require("./user");

router.use(`/${base}/${version}/item`, itemRouter);
router.use(`/${base}/${version}/user`, userRouter);

module.exports = router;