const { Benefit } = require("../models");
const HTTP_STATUS = require("../consts/consts");
const {
  errorResponse,
  successResponse,
  asyncHandler,
} = require("../utils/Handlers");

const getAllBenefits = asyncHandler(async (req, res) => {
  const benefits = await Benefit.findAll();
  return successResponse(res, HTTP_STATUS.OK, benefits);
});

const getBenefitById = asyncHandler(async (req, res) => {
  const benefit = await Benefit.findByPk(req.params.id);

  if (!benefit) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Benefit not found");
  }

  return successResponse(res, HTTP_STATUS.OK, benefit);
});

const createBenefit = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const benefit = await Benefit.create({ name, description });

  return successResponse(res, HTTP_STATUS.CREATED, benefit);
});

const updateBenefit = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const benefit = await Benefit.findByPk(req.params.id);

  if (!benefit) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Benefit not found");
  }

  await benefit.update({ name, description });

  return successResponse(res, HTTP_STATUS.OK, benefit);
});

const deleteBenefit = asyncHandler(async (req, res) => {
  const benefit = await Benefit.findByPk(req.params.id);

  if (!benefit) {
    return errorResponse(res, HTTP_STATUS.NOT_FOUND, "Benefit not found");
  }

  await benefit.destroy();

  return successResponse(res, HTTP_STATUS.OK, benefit);
});

module.exports = {
  getAllBenefits,
  getBenefitById,
  createBenefit,
  updateBenefit,
  deleteBenefit,
};
