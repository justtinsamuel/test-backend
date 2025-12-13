"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Employers, { foreignKey: "employerId" });
    }
  }
  Departments.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      floor: { type: DataTypes.INTEGER, allowNull: false },
      employerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "Employers",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Departments",
    }
  );
  return Departments;
};
