import mongoose from 'mongoose';
import User from './user';
const skillSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	isExpert: {
		type: Boolean,
		required: true,
	},
	level: {
		type: Number,
		required: true,
	},
	proficiency: {
		type: Number,
		required: true,
	},
	experience: {
		type: Number,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: User,
		required: true,
	},
});

const skill = mongoose.model('Skill', skillSchema);
export default skill;
