const { Job } = require("../models");
const HTTP_STATUS = require("../consts/consts");
const {
  errorResponse,
  successResponse,
  asyncHandler,
} = require("../utils/Handlers");

const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.findAll();
  return successResponse(res, HTTP_STATUS.OK, jobs);
});

const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findByPk(req.params.id);

  if (!job) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Job not found");
  }

  return successResponse(res, HTTP_STATUS.OK, job);
});

const createJob = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const job = await Job.create({ name, description });

  return successResponse(res, HTTP_STATUS.CREATED, job);
});

const updateJob = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const job = await Job.findByPk(req.params.id);

  if (!job) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Job not found");
  }

  await job.update({ name, description });

  return successResponse(res, HTTP_STATUS.OK, job);
});

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findByPk(req.params.id);

  if (!job) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Job not found");
  }

  await job.destroy();

  return successResponse(res, HTTP_STATUS.OK, job);
});

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
