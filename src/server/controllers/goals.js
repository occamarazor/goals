import asyncHandler from 'express-async-handler';

// @desc Get goals
// @route GET /api/goals/
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});

// @desc Create goal
// @route POST /api/goals/
// @access Private
export const createGoal = asyncHandler(async (req, res) => {
  const { text, duration } = req.body;

  if (text && duration) {
    res.status(201).json({ message: 'Create goal' });
  } else {
    res.status(400);
    throw new Error('Please include both text & duration');
  }
});

// TODO: error handling
// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal: ${req.params.id}` });
});

// TODO: error handling
// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal: ${req.params.id}` });
});
