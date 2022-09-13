import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import generateToken from '../configs/jwt.js';
import UserModel from '../models/user.js';

const GOAL_MODEL_FILTER = 'id name email createdAt updatedAt';

// @desc   Create user
// @route  POST /api/users/
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
      const passwordSalt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, passwordSalt);

      // Create user
      const { _id, createdAt, updatedAt } = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });
      const data = { _id, name, email, createdAt, updatedAt, token: generateToken(_id) };

      res.status(201).json({
        message: `User with ID: ${_id} created`,
        data,
      });
    }
  } else {
    res.status(400);
    throw new Error('Please include name, email & password');
  }
});

// @desc   Authenticate user
// @route  POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const currentUser = await UserModel.findOne({ email });
    const { _id, name, password: hashedPassword, createdAt, updatedAt } = currentUser;

    if (currentUser && (await bcrypt.compare(password, hashedPassword))) {
      const data = {
        _id,
        name,
        email,
        createdAt,
        updatedAt,
        token: generateToken(_id),
      };

      res.status(200).json({
        message: `User with email: ${email} logged in`,
        data,
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

// @desc   Get current user data
// @route  GET /api/users/current
// @access Private
export const getCurrentUser = asyncHandler(async (req, res) => {
  const currentUser = await UserModel.findById(req.user.id).select(GOAL_MODEL_FILTER);
  res.json(currentUser);
});
