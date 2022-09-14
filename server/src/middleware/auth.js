import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.js';

const protect = asyncHandler(async (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      const [, token] = req.headers.authorization.split(' ');
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findById(userId).select('-password');

      if (user) {
        req.user = user;
      } else {
        throw new Error(`User with ID: ${userId} does not exist`);
      }
      next();
    } catch (e) {
      console.log(e);
      res.status(401);
      throw new Error('Not authorized: invalid token');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized: no token');
  }
});

export default protect;
