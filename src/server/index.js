import { config } from 'dotenv';
import express from 'express';

config();
const PORT = process.env.port || 5000;
const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
