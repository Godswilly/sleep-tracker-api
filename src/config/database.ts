import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import User from '../model/user.model';
import Sleep from '../model/sleep.model';

config();

const connection = new Sequelize({
	dialect: 'postgres',
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	logging: false,
	models: [__dirname + '/model/**/*.model.ts'],
	modelMatch: (filename, member) => {
		return (
			filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
		);
	},
});

connection.addModels([User, Sleep]);

export default connection;
