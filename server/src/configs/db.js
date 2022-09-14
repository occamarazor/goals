// eslint-disable-next-line no-unused-vars
import colors from 'colors';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoBD connected: ${connection.connection.host}`.cyan.underline);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectDB;
