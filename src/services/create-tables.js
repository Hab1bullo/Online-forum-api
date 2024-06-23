import { sequelize } from "../config/db.js";
import { User } from "../models/auth.model.js";
import { Category } from "../models/category.model.js";
import { Comment } from "../models/comment.model.js";
import { Post } from "../models/post.model.js";
import { PostTag } from "../models/post.tag.model.js";
import { Tag } from "../models/tag.model.js";
import { Token } from "../models/token.model.js";


export const createTables = async (req, res) => {
    try {

        await User.sync();
        await Category.sync();
        await Tag.sync();
        await Post.sync();
        await Comment.sync();
        await PostTag.sync();
        await Token.sync();


        return res.status(200).send({
            message: "Tables created"
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: 'Table yaratishda xatolik',
            error: e
        });
    }
}