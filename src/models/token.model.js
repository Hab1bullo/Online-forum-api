import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";



export const Token = sequelize.define('refreshtokens',{
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }
});



