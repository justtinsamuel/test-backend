"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Employers, { foreignKey: "employerId" });
      // this.belongsTo(models.Jobs, { foreignKey: "jobId" });
      // this.belongsTo(models.Departments, { foreignKey: "departmentId" });
    }
  }
  Employees.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: [17],
            msg: "Age must be greater than 17 years",
          },
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Employers",
          key: "id",
        },
      },
      jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "Jobs",
          key: "id",
        },
      },
      departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "Departments",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Employees",
    }
  );
  return Employees;
};
