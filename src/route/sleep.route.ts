import { Router } from 'express';

import {
	getAllSleeps,
	createSleep,
	getSleepById,
	updateSleep,
	deleteSleep,
} from '../controller/sleep.controller';

const router = Router();

router.route('/').get(getAllSleeps).post(createSleep);

router.route('/:id').get(getSleepById).patch(updateSleep).delete(deleteSleep);

export default router;
