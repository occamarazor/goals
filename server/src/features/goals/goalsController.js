import asyncHandler from 'express-async-handler';
import GoalModel from './goalModel.js';

const GOAL_MODEL_FILTER = 'id user text duration createdAt updatedAt';

// @desc   Get goals
// @route  GET /api/goals/
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await GoalModel.find({ user: req.user }).select(GOAL_MODEL_FILTER);
  if (goals.length) {
    res.status(200).json({
      message: `All goals for user: ${req.user.id}`,
      data: goals,
    });
  } else {
    res.status(404);
    throw new Error(`No goals available for user: ${req.user.id}`);
  }
});

// @desc   Delete goals
// @route  DELETE /api/goals/
// @access Private
export const deleteGoals = asyncHandler(async (req, res) => {
  const goals = await GoalModel.find({ user: req.user }).select(GOAL_MODEL_FILTER);

  if (goals.length) {
    await GoalModel.find({ user: req.user }).deleteMany();

    res.status(200).json({
      message: `All goals deleted for user: ${req.user.id}`,
      data: goals,
    });
  } else {
    res.status(404);
    throw new Error(`No goals available for user: ${req.user.id}`);
  }
});

// @desc   Create goal
// @route  POST /api/goals/
// @access Private
export const createGoal = asyncHandler(async (req, res) => {
  const { text, duration } = req.body;

  if (text && duration) {
    const newGoal = await GoalModel.create({ user: req.user, text, duration });
    const filteredGoal = await GoalModel.findById(newGoal.id).select(GOAL_MODEL_FILTER);

    res.status(201).json({
      message: `Goal with ID: ${newGoal.id} created for user: ${req.user.id}`,
      data: filteredGoal,
    });
  } else {
    res.status(400);
    throw new Error('Please include both text & duration');
  }
});

// @desc   Update goal
// @route  PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const foundGoal = await GoalModel.findOne({ _id: req.params.id, user: req.user });

  if (foundGoal) {
    const { text, duration } = req.body;
    const updatedGoal = await GoalModel.findByIdAndUpdate(
      req.params.id,
      { text, duration },
      { new: true },
    ).select(GOAL_MODEL_FILTER);

    res.status(200).json({
      message: `Goal with ID: ${req.params.id} updated for user: ${req.user.id}`,
      data: updatedGoal,
    });
  } else {
    res.status(404);
    throw new Error(`Goal with ID: ${req.params.id} does not exist for user: ${req.user.id}`);
  }
});

// @desc   Delete goal
// @route  DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const foundGoal = await GoalModel.findOne({ _id: req.params.id, user: req.user }).select(
    GOAL_MODEL_FILTER,
  );

  if (foundGoal) {
    await foundGoal.remove();

    res.status(200).json({
      message: `Goal with ID: ${req.params.id} deleted for user: ${req.user.id}`,
      data: foundGoal,
    });
  } else {
    res.status(404);
    throw new Error(`Goal with ID: ${req.params.id} does not exist for user: ${req.user.id}`);
  }
});
