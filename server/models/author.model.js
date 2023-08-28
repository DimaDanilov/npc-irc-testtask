const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Author = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: "time_created",
    updatedAt: "time_updated",
  }
);

module.exports = {
  Author,
};
