import express from 'express';
// import User from '../models/user';
import authController from '../controllers/authController';

const authenticationController = authController();


const authRoutes = express.Router();
authRoutes.post('/login', authenticationController.login);
authRoutes.post('/signUp', authenticationController.signUp);

export default authRoutes;
