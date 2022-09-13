import { Router } from 'express';
import protect from '../middleware/auth.js';
import { createUser, loginUser, getCurrentUser } from '../controllers/users.js';

const usersRoutes = Router();

usersRoutes.post('/', createUser);
usersRoutes.post('/login', loginUser);
usersRoutes.get('/current', protect, getCurrentUser);

export default usersRoutes;
