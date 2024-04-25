import express from "express";
import {
  getAllUser,
  loginUser,
  registerUser,
} from "../controller/userController.js";

const router = express.Router();

router.route("/").get(getAllUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

export default router;
