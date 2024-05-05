import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const { URL_DB } = process.env;

    if (!URL_DB) {
      console.error('MONGO_URI environment variable is not defined.');
      process.exit(1);
    }

    mongoose.set('strictQuery', true);
    await mongoose.connect(URL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;