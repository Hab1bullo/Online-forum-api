import { sequelize } from "../config/db.js";
import { DataTypes, Sequelize } from "sequelize";
import { Post } from "./post.model.js";
import { Tag } from "./tag.model.js";



export const PostTag = sequelize.define('postTags', {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Post,
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tag,
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false,
    underscored: true
  });

  