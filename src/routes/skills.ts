import express from 'express';
import middlewares from '../middlewares/index';
import controllers from '../controllers/index';

const skillRouter = express.Router();

skillRouter.post('/addskills', [middlewares.verifyUser, middlewares.validators.validateSkillReqBody], controllers.skills.addSkill)
skillRouter.get('/skills')
skillRouter.put('/updateskills')
skillRouter.delete('/skill')

export default skillRouter;