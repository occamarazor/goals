// @desc Get goals
// @route GET /api/goals/
// @access Private
export const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' });
};

// @desc Create goal
// @route POST /api/goals/
// @access Private
export const createGoal = (req, res) => {
  const { text, duration } = req.body;

  if (text && duration) {
    res.status(201).json({ message: 'Create goal' });
  } else {
    res.status(400).json({ message: 'Please include both text & duration' });
  }
};

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal: ${req.params.id}` });
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal: ${req.params.id}` });
};
