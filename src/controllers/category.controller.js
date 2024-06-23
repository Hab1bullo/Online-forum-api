import { Category } from "../models/category.model.js";



export const postCaregory = async (req, res) => {
    try {

        const { name } = req.body;
        if (typeof name != 'string') return res.status(400).send({
            massage: "Name must be string"
        });

        const category = await Category.create({
            name: name
        });

        return res.status(201).send({
            message: "OK",
            category: category
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}

export const getone = async (req, res) => {
    try {

        const { id } = req.params;

        const category = await Category.findOne({
            where: {
                id: id
            }
        });

        if (!category) {
            return res.status(200).send({
                message: "Category not found",
            });
        }

        return res.status(200).send({
            message: "OK",
            category: category
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}


export const updateOne = async (req, res) => {
    try {

        const { id } = req.params;
        const { name } = req.body;
        if (typeof name != 'string') return res.status(400).send({ message: "Name must be string" })

        const category = await Category.update(
            {
                name: name
            },
            {
                where: {
                    id: id
                }
            });

        return res.status(200).send({
            message: "OK",
            category: category
        });


    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}
