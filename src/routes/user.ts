import express from 'express';
import User from '../models/user';
import middlewares from '../middlewares/index';
import controllers from '../controllers/index';
import { app } from '../app';

const user = express.Router();

user.post(
	'/register',
	[middlewares.validators.validateUserReqBody, middlewares.checkUser],
	controllers.user.createUser
);

user.post('/login', controllers.user.signIn);

user.get('/logout', controllers.user.logout);

// make this endpoint available for admin only
user.get('/getusers', async (req, res) => {
	res.send(await User.find());
});

export default user;
