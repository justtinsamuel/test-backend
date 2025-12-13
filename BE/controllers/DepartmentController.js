const { Department } = require("../models");
const HTTP_STATUS = require("../consts/consts");
const {
  errorResponse,
  successResponse,
  asyncHandler,
} = require("../utils/Handlers");

const getAllDepartments = asyncHandler(async (req, res) => {
  const departments = await Department.findAll();
  return successResponse(res, HTTP_STATUS.OK, departments);
});

const getDepartmentById = asyncHandler(async (req, res) => {
  const department = await Department.findByPk(req.params.id);

  if (!department) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Department not found");
  }

  return successResponse(res, HTTP_STATUS.OK, department);
});

const createDepartment = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const department = await Department.create({ name, description });

  return successResponse(res, HTTP_STATUS.CREATED, department);
});

const updateDepartment = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const department = await Department.findByPk(req.params.id);

  if (!department) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Department not found");
  }

  await department.update({ name, description });

  return successResponse(res, HTTP_STATUS.OK, department);
});

const deleteDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findByPk(req.params.id);

  if (!department) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Department not found");
  }

  await department.destroy();

  return successResponse(res, HTTP_STATUS.OK, department);
});

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
