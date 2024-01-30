import express from "express";
import {
	getAllContacts,
	getOneContact,
	deleteContact,
	createContact,
	updateContact,
	updateStatusContact,
} from "../controllers/contactsControllers.js";
import { isValidId } from "../helpers/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", isValidId, updateContact);

contactsRouter.patch("/:id/favorite", isValidId, updateStatusContact);

export default contactsRouter;
