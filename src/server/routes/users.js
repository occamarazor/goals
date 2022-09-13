import { Router } from 'express';
import { createUser, loginUser, getCurrentUser } from '../controllers/users.js';

const usersRoutes = Router();

usersRoutes.post('/', createUser);
usersRoutes.post('/login', loginUser);
usersRoutes.get('/current', getCurrentUser);

export default usersRoutes;
