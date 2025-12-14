const { User } = require("../models");
const { Op } = require("sequelize");

class UserController {
  static async getUsers(req, res, next) {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  static async getUsersById(req, res, next) {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: {
          exclude: ["password"],
        },
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  static async createUser(req, res, next) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
  static async updateUser(req, res, next) {
    try {
      const [updated] = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!updated) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteUser(req, res, next) {
    try {
      const deleted = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!deleted) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async searchUser(req, res, next) {
    try {
      const { q } = req.query;
      const users = await User.findAll({
        where: {
          [Op.or]: [
            { username: { [Op.iLike]: `%${q}%` } },
            { email: { [Op.iLike]: `%${q}%` } },
          ],
        },
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  static async sortUser(req, res, next) {
    try {
      const { sortBy = "id", order = "ASC" } = req.query;
      const users = await User.findAll({
        order: [[sortBy, order.toUpperCase()]],
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      res.status(200).json({ message: "Login successful", user: { id: user.id, email: user.email, username: user.username } });
    } catch (error) {
      next(error);
    }
  }
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const existingUser = await User.findOne({
        where: {
          [Op.or]: [{ email }, { username }],
        },
      });
      if (existingUser) {
        return res.status(400).json({ message: "Email or username already exists" });
      }
      const user = await User.create({ username, email, password });
      res.status(201).json({ message: "User registered successfully", user: { id: user.id, email: user.email, username: user.username } });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
