import { sequelize } from "../config/db.js";
import { DataTypes, Sequelize } from "sequelize";



export const Category = sequelize.define('categorys', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    underscored: true
  });