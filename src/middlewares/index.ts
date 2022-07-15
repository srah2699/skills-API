import { checkUser } from './auth';
import validators from './validators';

const middlewares = {
  checkUser,
  validators
}

export default middlewares;