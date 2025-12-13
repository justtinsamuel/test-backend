const express = require("express");
const DepartmentController = require("../controllers/DepartmentController");

const DepartmentRouter = express.Router();

DepartmentRouter.get("/", DepartmentController.getAllDepartments);

DepartmentRouter.get("/:id", DepartmentController.getDepartmentById);
DepartmentRouter.post("/", DepartmentController.createDepartment);
DepartmentRouter.put("/:id", DepartmentController.updateDepartment);
DepartmentRouter.delete("/:id", DepartmentController.deleteDepartment);

module.exports = DepartmentRouter;