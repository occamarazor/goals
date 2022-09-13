import { Router } from 'express';
import { createUser, loginUser, getCurrentUser } from '../controllers/users.js';

const usersRoutes = Router();

usersRoutes.route('/').post(createUser);
usersRoutes.route('/login').post(loginUser);
usersRoutes.route('/current').get(getCurrentUser);

export default usersRoutes;
