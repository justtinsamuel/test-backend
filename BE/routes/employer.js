const express = require("express");
const EmployerController = require("../controllers/EmployerController");

const EmployerRouter = express.Router();

EmployerRouter.get("/", EmployerController.getAllEmployers);

EmployerRouter.get("/:id", EmployerController.getEmployerById);
EmployerRouter.post("/", EmployerController.createEmployer);
EmployerRouter.put("/:id", EmployerController.updateEmployer);
EmployerRouter.delete("/:id", EmployerController.deleteEmployer);

module.exports = EmployerRouter;