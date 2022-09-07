import { Router } from 'express';
import { getGoals, deleteGoals, createGoal, updateGoal, deleteGoal } from '../controllers/goals.js';

const router = Router();

router.route('/').get(getGoals).delete(deleteGoals).post(createGoal);

router.route('/:id').put(updateGoal).delete(deleteGoal);

export default router;
