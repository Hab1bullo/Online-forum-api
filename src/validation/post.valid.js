import Joi from "joi";


export const postValid = (body) => {

    const schema = Joi.object({
        user_id: Joi.number().positive().required(),
        title: Joi.string().min(3).required(),
        body:Joi.string().required(),
        category_id: Joi.number().positive().required()
    });

    const { error, value } = schema.validate(body);

    if (error) throw error;
}