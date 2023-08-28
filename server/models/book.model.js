const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { Author } = require("./author.model");

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publication_date: {
      type: DataTypes.DATEONLY,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: "time_created",
    updatedAt: "time_updated",
  }
);

Book.belongsTo(Author, { foreignKey: "author_id", as: "author" });

module.exports = {
  Book,
};
