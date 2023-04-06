import { RequestHandler } from 'express';

import Sleep from '../model/sleep.model';

export const getAllSleeps: RequestHandler = async (req, res, next) => {
	const allSleeps: Sleep[] = await Sleep.findAll();
	return res
		.status(200)
		.json({ message: 'Sleep fetched successfully', data: allSleeps });
};

export const createSleep: RequestHandler = async (req, res, next) => {
	const sleep: Sleep = await Sleep.create({ ...req.body });
	return res
		.status(200)
		.json({ message: 'Sleep created successfully', data: sleep });
};

export const getSleepById: RequestHandler = async (req, res, next) => {
	const { id } = req.params;
	const sleep: Sleep | null = await Sleep.findByPk(id);
	return res
		.status(200)
		.json({ message: 'Sleep fetched successfully', data: sleep });
};

export const updateSleep: RequestHandler = async (req, res, next) => {
	const { id } = req.params;
	await Sleep.update({ ...req.body }, { where: { id } });
	const updatedSleep: Sleep | null = await Sleep.findByPk(id);
	return res
		.status(200)
		.json({ message: 'Sleep updated successfully', data: updatedSleep });
};

export const deleteSleep: RequestHandler = async (req, res, next) => {
	const { id } = req.params;
	const deletedSleep: Sleep | null = await Sleep.findByPk(id);
	await Sleep.destroy({ where: { id } });
	return res
		.status(200)
		.json({ message: 'Sleep deleted successfully', data: deletedSleep });
};
