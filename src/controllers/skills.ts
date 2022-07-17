import Skill from '../models/skills';
import {RequestHandler} from 'express';

const addSkill: RequestHandler = async (req: any, res) => {
  const skill = new Skill({
    ...req.body,
    user: req.user._id
  });
  try {
    await skill.save();
    res.status(200).json({ message: 'skill added successfully',skill});
  } catch (err: any) {
    res.status(500).send(err.message);
  }
}

const getSkill: RequestHandler = async (req, res) => {

}

const updateSkill: RequestHandler = async (req, res) => {

}

const deleteSkill: RequestHandler = async (req, res) => {

}

const skills = {
  addSkill,
  getSkill,
  updateSkill,
  deleteSkill
}

export default skills;
