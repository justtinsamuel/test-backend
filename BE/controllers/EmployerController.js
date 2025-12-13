const { Employer } = require("../models");
const HTTP_STATUS = require("../consts/consts");
const {
  errorResponse,
  successResponse,
  asyncHandler,
} = require("../utils/Handlers");

const getAllEmployers = asyncHandler(async (req, res) => {
  const employers = await Employer.findAll();
  return successResponse(res, HTTP_STATUS.OK, employers);
});

const getEmployerById = asyncHandler(async (req, res) => {
  const employer = await Employer.findByPk(req.params.id);

  if (!employer) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Employer not found");
  }

  return successResponse(res, HTTP_STATUS.OK, employer);
});

const createEmployer = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const employer = await Employer.create({ name, description });

  return successResponse(res, HTTP_STATUS.CREATED, employer);
});

const updateEmployer = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const employer = await Employer.findByPk(req.params.id);

  if (!employer) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Employer not found");
  }

  await employer.update({ name, description });

  return successResponse(res, HTTP_STATUS.OK, employer);
});

const deleteEmployer = asyncHandler(async (req, res) => {
  const employer = await Employer.findByPk(req.params.id);

  if (!employer) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Employer not found");
  }

  await employer.destroy();

  return successResponse(res, HTTP_STATUS.OK, employer);
});

module.exports = {
  getAllEmployers,
  getEmployerById,
  createEmployer,
  updateEmployer,
  deleteEmployer,
};
