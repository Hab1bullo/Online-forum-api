import { Comment } from "../models/comment.model.js";
import { commentValid } from "../validation/comment.valid.js";


export const postComments = async (req, res) => {
    try {
        commentValid(req.body);

        const { post_id, user_id, body } = req.body;

        const comment = await Comment.create({
            post_id: post_id,
            user_id: user_id,
            body: body
        });

        return res.status(201).send({
            message: "Comment posted",
            comment: comment
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Serverda xatolik",
            error: e
        });
    }
}