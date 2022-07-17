import express from 'express';
import middlewares from '../middlewares/index';
import controllers from '../controllers/index';

const skillRouter = express.Router();

skillRouter.post('/skills', [middlewares.verifyUser, middlewares.validators.validateSkillReqBody], controllers.skills.addSkill)
skillRouter.get('/skills', middlewares.verifyUser, controllers.skills.getSkill)
skillRouter.put('/skills', middlewares.verifyUser, controllers.skills.updateSkill)
skillRouter.delete('/skills', middlewares.verifyUser, controllers.skills.deleteSkill)

export default skillRouter;