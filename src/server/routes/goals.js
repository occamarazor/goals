import { Router } from 'express';
import { getGoals, deleteGoals, createGoal, updateGoal, deleteGoal } from '../controllers/goals.js';

const goalsRoutes = Router();

goalsRoutes.route('/').get(getGoals).delete(deleteGoals).post(createGoal);
goalsRoutes.route('/:id').put(updateGoal).delete(deleteGoal);

export default goalsRoutes;
