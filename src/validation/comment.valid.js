import Joi from 'joi';

export const commentValid = async (body) => {

    const schema = Joi.object({
        post_id: Joi.number().positive().required(),
        user_id: Joi.number().positive().required(),
        body: Joi.string().required()
    });

    const { error, value } = schema.validate(body);

    if(error) throw error
} 