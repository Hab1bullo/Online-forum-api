import { Post } from "../models/post.model.js";
import { postValid } from "../validation/post.valid.js";


export const createPost = async (req, res) => {
    try {

        postValid(req.body);
        const { user_id, title, body, category_id } = req.body;
        const post = await Post.create({
            user_id: user_id,
            title: title,
            body: body,
            category_id: category_id
        });

        return res.status(200).send({
            message: "Post created",
            post: post
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}