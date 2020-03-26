import express from 'express';
import passport from 'passport';
import authController from '../controllers/authController';

const authenticationController = authController();
const authRoutes = express.Router();

authRoutes.post('/login', passport.authenticate('local'), (req, res) => authenticationController.login(req, res));
authRoutes.post('/signup', authenticationController.signup);
authRoutes.get('/users', authenticationController.getUsers);

export default authRoutes;
