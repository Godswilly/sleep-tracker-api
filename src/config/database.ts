import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';

config();

const connection = new Sequelize({
	dialect: 'postgres',
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	logging: false,
	models: [__dirname + '/models/**/*.model.ts'],
	modelMatch: (filename, member) => {
		return (
			filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
		);
	},
});

export default connection;
