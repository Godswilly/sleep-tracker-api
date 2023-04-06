import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';

import userRoutes from './route/user.route';
import sleepRoutes from './route/sleep.route';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/sleeps', sleepRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

export default app;
