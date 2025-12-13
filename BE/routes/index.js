const express = require("express");
const { Router } = express;

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

const employeeRouter = require("./employee");
const employerRouter = require("./employer");
const jobRouter = require("./job");
const departmentRouter = require("./department");
const benefitRouter = require("./benefit");

router.use("/employees", employeeRouter);
router.use("/employers", employerRouter);
router.use("/jobs", jobRouter);
router.use("/departments", departmentRouter);
router.use("/benefits", benefitRouter);

module.exports = router;
