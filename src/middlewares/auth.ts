import {RequestHandler} from 'express';
import User from '../models/user';

const checkUser: RequestHandler= async (req, res, next) => {
  const { emailId } = req.body;
  try { 
    await User.findOne({emailId}) ? res.status(400).send({ message: 'User already exists'}) : next()
  } catch (err) {
    res.status(404).send(err);
  }
}

export {checkUser} 