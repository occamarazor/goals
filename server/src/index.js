import { config } from 'dotenv';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import usersRoutes from './features/users/usersRoutes.js';
import goalsRoutes from './features/goals/goalsRoutes.js';
import connectDB from './configs/db.js';
import errorHandler from './middleware/error.js';

// TODO:
//  0. Error boundaries
//  1. Notifications
//  2. Form validation
//  3. Proper monorepo (yarn/lerna/nx)
//  4. Unit testing
//  5. Authentication provider?
//  6. Some animation
//  7. Deploy

config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api/users', usersRoutes);
app.use('/api/goals', goalsRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
