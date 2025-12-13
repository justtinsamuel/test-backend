const { Employee } = require("../models");
const HTTP_STATUS = require("../consts/consts");
const {
  errorResponse,
  successResponse,
  asyncHandler,
} = require("../utils/Handlers");

const getAllEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.findAll();
  return successResponse(res, HTTP_STATUS.OK, employees);
});

const getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);

  if (!employee) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Employee not found");
  }

  return successResponse(res, HTTP_STATUS.OK, employee);
});

const createEmployee = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const employee = await Employee.create({ name, description });

  return successResponse(res, HTTP_STATUS.CREATED, employee);
});

const updateEmployee = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const employee = await Employee.findByPk(req.params.id);

  if (!employee) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Employee not found");
  }

  await employee.update({ name, description });

  return successResponse(res, HTTP_STATUS.OK, employee);
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);

  if (!employee) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Employee not found");
  }

  await employee.destroy();

  return successResponse(res, HTTP_STATUS.OK, employee);
});

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
