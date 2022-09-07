import { config } from 'dotenv';
import express from 'express';
import router from './routes/goals.js';

config();
const PORT = process.env.port || 5000;
const app = express();

app.use('/api/goals', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
