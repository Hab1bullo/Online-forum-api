import { DATE } from "sequelize";
import { User } from "../models/auth.model.js";
import { Token } from "../models/token.model.js";
import { accessTokenGenerator, refreshTokenGenerator } from "../utils/jwt.js";
import { uservalid } from "../validation/auth.valid.js";


export const postUser = async (req, res) => {

    try {
        uservalid(req.body);
        const { username, email, password } = req.body;

        const user = await User.create({
            username: username,
            email: email,
            password: password
        });

        return res.status(201).send({
            message: "User registered",
            user: user
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}


export const loginUser = async (req, res) => {
    try {

        uservalid(req.body);
        const { username, email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(400).send({
                message: "User not found"
            });
        };

        const accesToken = accessTokenGenerator({ username, email });
        const refreshToken = refreshTokenGenerator({ username, email });

        const token = await Token.create({
            email: email,
            token: refreshToken
        });

        return res.status(200).send({
            message: "OK",
            accesToken: accesToken,
            refreshToken: refreshToken,
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}


export const getAllUsers = async (req, res) => {
    try {

        const users = await User.findAll();

        return res.status(200).send({
            message: "OK",
            users: users
        })

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}


export const putOneUser = async (req, res) => {
    try {

        const { id } = req.params;
        uservalid(req.body);
        const { username, email, password } = req.body;

        if (!id) return res.status(400).send({ message: "Id is required" });

        const user = await User.findOne({
            where: {
                id: id
            }
        });

        if (!user) return res.status(400).send({ message: "User not found" });

        const updatedUser = await User.update({
            username: username,
            email: email,
            password: password
        }, {
            where: {
                id: id
            }
        });

        return res.status(200).send({
            message: "OK",
            updatedUser: updatedUser
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}


export const deleteOneUser = async (req, res) => {
    try {

        const { id } = req.params;
        if (!id) return res.status(400).send({ message: "Id is required" });

        const user = await User.findOne({
            where: {
                id: id
            }
        });
        if (user.deleted_at) return res.status(200).send({ message: "User not found" });

        const deletedUser = await User.update(
            {
                deleted_at: Date.now()
            },
            {
                where: {
                    id: id
                }
            });

        return res.status(500).send({
            message: "User deleted",
            deletedUser: deletedUser
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}



