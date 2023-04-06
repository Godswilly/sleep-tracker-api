import { config } from 'dotenv';
import app from './app';
import connection from './config/database';

config();
const PORT: Number = Number(process.env.PORT);

connection
	.sync({ force: false })
	.then(() => {
		console.log('Database successfully connected');
	})
	.catch((err) => {
		console.log('Error', err);
	});

app.listen(PORT, (): void => {
	console.log(`Connected successfully on port ${PORT}`);
});
