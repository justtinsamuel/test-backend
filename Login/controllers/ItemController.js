const { Item } = require("../models");
const { Op } = require("sequelize");

class ItemController {
  static async getItems(req, res, next) {
    try {
      const items = await Item.findAll({});
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }
  static async getItemById(req, res, next) {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }
  static async createItem(req, res, next) {
    try {
      const { name, price, stock, category, image, UserId } = req.body;
      const item = await Item.create({
        name,
        price,
        stock,
        category,
        image,
        UserId,
      });
      res.status(201).json({ message: "Item created successfully", item });
    } catch (error) {
      next(error);
    }
  }
  static async updateItem(req, res, next) {
    try {
      const [updated] = await Item.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!updated) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json({ message: "Item updated successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteItem(req, res, next) {
    try {
      const deleted = await Item.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!deleted) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async searchItem(req, res, next) {
    try {
      const { query } = req.query;
      const items = await Item.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: `%${query}%` } },
            { category: { [Op.iLike]: `%${query}%` } },
          ],
        },
      });
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }
  static async sortItem(req, res, next) {
    try {
      const { sortBy = "id", order = "ASC" } = req.query;
      const items = await Item.findAll({
        order: [[sortBy, order.toUpperCase()]],
      });
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ItemController;
