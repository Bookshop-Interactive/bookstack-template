import mongoose from 'mongoose';
require('dotenv').config();

const creds = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
};
console.log(creds);
export default mongoose.connect(
  `mongodb+srv://${creds.user}:${
    creds.pass
  }@personal-tests-oxq9e.mongodb.net/Bookstack-Tests?retryWrites=true`,
  { useNewUrlParser: true },
);
