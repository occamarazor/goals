import asyncHandler from 'express-async-handler';
import GoalModel from '../models/goal.js';

// @desc Get goals
// @route GET /api/goals/
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await GoalModel.find();
  res.status(200).json(goals);
});

// @desc Delete goals
// @route DELETE /api/goals/
// @access Private
export const deleteGoals = asyncHandler(async (req, res) => {
  const goals = await GoalModel.find();

  if (goals.length) {
    await GoalModel.deleteMany();
    res.status(200).json({ message: `All goals deleted`, data: goals });
  } else {
    res.status(400);
    throw new Error('No goals available');
  }
});

// @desc Create goal
// @route POST /api/goals/
// @access Private
export const createGoal = asyncHandler(async (req, res) => {
  const { text, duration } = req.body;

  if (text && duration) {
    const goal = await GoalModel.create({ text, duration });
    res.status(201).json({ message: `Goal with ID: ${goal.id} created`, data: goal });
  } else {
    res.status(400);
    throw new Error('Please include both text & duration');
  }
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const foundGoal = await GoalModel.findById(req.params.id);

  if (foundGoal) {
    const { text, duration } = req.body;
    const updatedGoal = await GoalModel.findByIdAndUpdate(
      req.params.id,
      { text, duration },
      { new: true },
    );

    res.status(200).json({ message: `Goal with ID: ${req.params.id} updated`, data: updatedGoal });
  } else {
    res.status(400);
    throw new Error(`No goal with ID: ${req.params.id}`);
  }
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const foundGoal = await GoalModel.findById(req.params.id);

  if (foundGoal) {
    await foundGoal.remove();
    res.status(200).json({ message: `Goal with ID: ${req.params.id} deleted`, data: foundGoal });
  } else {
    res.status(400);
    throw new Error(`No goal with ID: ${req.params.id}`);
  }
});
