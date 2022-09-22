import { Router } from 'express';
import protect from '../../middleware/auth.js';
import { getGoals, deleteGoals, createGoal, updateGoal, deleteGoal } from './goalsController.js';

const goalsRoutes = Router();

goalsRoutes
  .route('/')
  .get(protect, getGoals)
  .delete(protect, deleteGoals)
  .post(protect, createGoal);
goalsRoutes.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

export default goalsRoutes;
