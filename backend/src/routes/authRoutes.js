import express from "express";
import { login, register } from "../controllers/authController.js";
import validation from '../middlewares/authMiddleWare.js';

const authRoutes = (User)=>{
 const router = express.Router()

router.post('/register',validation.validateSignup, (req, res) => register(req, res, User));
router.post('/login',validation.validateLogin, (req, res) => login(req, res, User));

return router;
}

export default authRoutes;

