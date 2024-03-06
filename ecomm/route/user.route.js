import express from "express";
import { signup } from "../controller/user.controller.js";
const router = express.Router();
router.route("/signup").post(signup);
export default router;
