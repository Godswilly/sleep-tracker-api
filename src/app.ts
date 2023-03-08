import express, {
	Application,
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
} from 'express';
import { config } from 'dotenv';
import { Server } from 'http';
import createHttpError from 'http-errors';

config();

const app: Application = express();
const PORT: Number = Number(process.env.PORT) || 5000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send('Hello World');
});

app.use((req: Request, res: Response, next: NextFunction) => {
	next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		status: err.status || 500,
		message: err.message,
	});
};

app.use(errorHandler);

const server: Server = app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
