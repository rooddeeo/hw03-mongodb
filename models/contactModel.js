import { model, Schema } from "mongoose";

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
	},
	favorite: {
		type: Boolean,
		default: false,
	},
});

const Contact = model("Contact", contactSchema);

export {Contact};
