const { UserController } = require("../controllers/UserController");
const userRouter = require("express").Router();

// CRUD Basic
userRouter.get("/", UserController.getUsers);
userRouter.get("/:id", UserController.getUserById);
userRouter.post("/", UserController.createUser);
userRouter.put("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);

// More Routes
userRouter.get("/search", UserController.searchUser);
userRouter.get("/sort", UserController.sortUser);

// Login (Authentication) dan Register
userRouter.post("/login", UserController.login);
userRouter.post("/register", UserController.register);

module.exports = userRouter;
