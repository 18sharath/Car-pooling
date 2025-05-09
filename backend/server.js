import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import tripRoutes from './routes/tripRoutes.js';
import userRoutes from './routes/UserRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/trips', tripRoutes);//"Hey Express, whenever someone hits a URL that starts with /api/trips, forward the rest of the request to the tripRoutes router."
app.use('/api/passengers', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
