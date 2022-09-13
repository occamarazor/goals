import asyncHandler from 'express-async-handler';

// @desc Create user
// @route POST /api/users/
// @access Public
export const createUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Create User' });
});

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User' });
});

// @desc Get current user data
// @route GET /api/users/current
// @access Public
export const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Get Current User' });
});
