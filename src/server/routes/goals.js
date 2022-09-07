import { Router } from 'express';
import { getGoals, createGoal, updateGoal, deleteGoal } from '../controllers/goals.js';

const router = Router();

router.route('/').get(getGoals).post(createGoal);

router.route('/:id').put(updateGoal).delete(deleteGoal);

export default router;
