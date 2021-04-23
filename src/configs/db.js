import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose
      .connect(process.env.DATABASE_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB successfully connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;