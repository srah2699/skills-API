import { connect } from 'mongoose';

const dbConnection = async () => {
  try{
  await connect(process.env.MONGO_URI as string);
  } catch(err){
    console.log(err);
    process.exit(1);
  }
};

export default dbConnection