import { Sequelize } from "sequelize";


export const sequelize = new Sequelize(
    "postgres://postgres:rooter@localhost:7860/sequelize"
);
