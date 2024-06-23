import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";




export const Tag = sequelize.define('tags', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    underscored: true
  });
  