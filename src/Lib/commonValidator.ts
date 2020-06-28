import Joi from '@hapi/joi';

export const userSchema = {
	search: Joi.string().regex(/^[a-zA-Z ]/)
		.messages({
			'string.pattern.base': `Only english letters please`,
			'string.base': `Only english letters please`,
		}),
};