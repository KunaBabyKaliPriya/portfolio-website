import { Router } from "express";
import { createMessage, listMessages } from "../controllers/contact.controller.js";

const router = Router();

router.post("/", createMessage);
router.get("/", listMessages);

export default router;
