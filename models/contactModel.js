import { model, Schema } from "mongoose";
import Joi from "joi";

export const createContactSchema = data =>
	Joi.object({
		name: Joi.string().min(2).required(),
		email: Joi.string().email().required(),
		phone: Joi.string().min(8).max(16).required(),
	})
		.options({ abortEarly: false })
		.validate(data, { allowUnknown: true });

export const updateContactSchema = data =>
	Joi.object({
		name: Joi.string().min(2),
		email: Joi.string().email(),
		phone: Joi.string().min(8).max(16),
	})
		.options({ abortEarly: false })
		.validate(data);

export const updateStatusContactSchema = data =>
	Joi.object({
		favorite: Joi.boolean().required(),
	})
		.options({ abortEarly: false })
		.validate(data);

const contactSchema = new Schema({
	name: {
		type: String,
		required: [true, "Set name for contact"],
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
		unique: true,
	},
	favorite: {
		type: Boolean,
		default: false,
	},
});

const Contact = model("Contact", contactSchema);

export { Contact };
