import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName:"sample_mflix"
    });
      console.log("Connected to MongoDB",conn.connection.host);
    } catch (error) {

      console.error(`Error connecting to database, ${error}`);
    }
}

export default connectdb;