const express = require("express");
const BenefitController = require("../controllers/BenefitController");

const BenefitRouter = express.Router();

BenefitRouter.get("/", BenefitController.getAllBenefits);
BenefitRouter.get("/:id", BenefitController.getBenefitById);
BenefitRouter.post("/", BenefitController.createBenefit);
BenefitRouter.put("/:id", BenefitController.updateBenefit);
BenefitRouter.delete("/:id", BenefitController.deleteBenefit);

module.exports = BenefitRouter;