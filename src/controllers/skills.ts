import Skill from '../models/skills';
import {RequestHandler} from 'express';

const addSkill: RequestHandler = async (req: any, res) => {
  const {skills} = req.body;
  const userSkills: object[] = [];
  skills.forEach((skill: any) => 
  {
    skill['user'] = req.user._id
    userSkills.push(skill);
  });
  
  try {
    await Skill.insertMany(userSkills);
    res.status(200).json({ message: 'skill added successfully',userSkills});
  } catch (err: any) {
    res.status(500).send(err);
  }
}

const getSkill: RequestHandler = async (req, res) => {
  try{
  const result = await Skill.find();
  res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

const updateSkill: RequestHandler = async (req, res) => {
  const {skills} = req.body;
  const updatedSkills: any[]  = [];
  const errors: any[] = [];

  for (let skill of skills) {
    try {
      const {name} = skill;
      const result = await Skill.updateOne({name}, {$set: skill})
      updatedSkills.push(result);
    } catch (err) {
      errors.push(err)
      break;
    }
  } 
  errors.length ? res.status(500).send({errors: errors}) : res.status(200).send(updatedSkills);
}

const deleteSkill: RequestHandler = async (req, res) => {
  const {skills} = req.body;
  const deletedSkills: any[]  = [];
  const errors: any[] = [];
  
  for (let skill of skills) {
    try {
      const {name} = skill;
      const result = await Skill.deleteOne({name})
      deletedSkills.push(result);
    } catch (err) {
      errors.push(err)
      break;
    }
  } 
  errors.length ? res.status(500).send({errors: errors}) : res.status(200).send(deletedSkills);
}

const skills = {
  addSkill,
  getSkill,
  updateSkill,
  deleteSkill
}

export default skills;
