import { config } from 'dotenv';
import app from './app';
import connection from './config/database';
import logger from "./utils/logger";

config();
const PORT: Number = Number(process.env.PORT);

connection
	.sync({ force: false })
	.then(() => {
		logger.info('Database successfully connected');
	})
	.catch((err) => {
		logger.error('Error', err);
	});

app.listen(PORT, (): void => {
	logger.info(`Connected successfully on port ${PORT}`);
});
