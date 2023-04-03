import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';

import userRoutes from './routes/user.route';

export const app: Application = express();

app.use(express.json());

app.use('/users', userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

module.exports = app;
