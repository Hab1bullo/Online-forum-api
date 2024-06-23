import Joi from "joi";

export const uservalid = (body) => {

    const schema = Joi.object({
        username: Joi.string().max(10),
        email: Joi.string().email(),
        password: Joi.string().min(5).max(16)
    });


    const { error, value } = schema.validate(body);

    if(error) throw error
}