import { config } from 'dotenv';
import express, { json, urlencoded } from 'express';
import errorHandler from './middleware/error.js';
import router from './routes/goals.js';

config();
const PORT = process.env.port || 5000;
const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api/goals', router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
