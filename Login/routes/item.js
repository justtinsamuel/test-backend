const { ItemController } = require("../controllers/ItemController");
const itemRouter = require("express").Router();
const { authentication, authorization } = require("../middlewares/auth");

// CRUD Basic
itemRouter.get("/", ItemController.getItems);
itemRouter.get("/:id", ItemController.getItemById);
itemRouter.post(
  "/",
  // authentication,
  ItemController.createItem
);
itemRouter.put(
  "/:id",
  //   authentication,
  //   authorization,
  ItemController.updateItem
);
itemRouter.delete(
  "/:id",
  //   authentication,
  //   authorization,
  ItemController.deleteItem
);

// More Routes
itemRouter.get("/search", ItemController.searchItem);
itemRouter.get("/sort", ItemController.sortItem);

module.exports = itemRouter;
