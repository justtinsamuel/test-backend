const express = require("express");
const JobController = require("../controllers/JobController");

const JobRouter = express.Router();

JobRouter.get("/", JobController.getAllJobs);

JobRouter.get("/:id", JobController.getJobById);
JobRouter.post("/", JobController.createJob);
JobRouter.put("/:id", JobController.updateJob);
JobRouter.delete("/:id", JobController.deleteJob);

module.exports = JobRouter;