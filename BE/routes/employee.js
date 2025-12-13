const express = require("express");
const EmployeeController = require("../controllers/EmployeeController");

const EmployeeRouter = express.Router();

EmployeeRouter.get("/", EmployeeController.getAllEmployees);
EmployeeRouter.get("/:id", EmployeeController.getEmployeeById);
EmployeeRouter.post("/", EmployeeController.createEmployee);
EmployeeRouter.put("/:id", EmployeeController.updateEmployee);
EmployeeRouter.delete("/:id", EmployeeController.deleteEmployee);

module.exports = EmployeeRouter;