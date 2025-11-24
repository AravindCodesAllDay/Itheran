import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user_controller.js";

const router = Router();

/**
 * @route POST /api/users/register
 * @desc Register a new user
 * @access Public
 */
router.post("/register", registerUser);

/**
 * @route POST /api/users/login
 * @desc Authenticate user & get token
 * @access Public
 */
router.post("/login", loginUser);

export default router;
