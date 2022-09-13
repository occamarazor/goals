import asyncHandler from 'express-async-handler';
import bcryptjs from 'bcryptjs';
import UserModel from '../models/user.js';

// @desc Create user
// @route POST /api/users/
// @access Public
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error(`User with email: ${email} already exists`);
    } else {
      // Hash password
      const passwordSalt = await bcryptjs.genSalt(10);
      const passwordHashed = await bcryptjs.hash(password, passwordSalt);

      // Create user
      const user = await UserModel.create({ name, email, password: passwordHashed });
      res.status(201).json({
        message: `User with ID: ${user.id} created`,
        data: user,
      });
    }
  } else {
    res.status(400);
    throw new Error('Please include name, email & password');
  }
});

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const currentUser = await UserModel.findOne({ email });

    if (currentUser && (await bcryptjs.compare(password, currentUser.password))) {
      res.status(200).json({
        message: `User with email: ${email} logged in`,
        data: currentUser,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user credentials');
    }
  } else {
    res.status(400);
    throw new Error('Please include both email & password');
  }
});

// @desc Get current user data
// @route GET /api/users/current
// @access Public
export const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Get Current User' });
});
