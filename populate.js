require('dotenv').config();

const connect = require('./db/connect');

const jsonJobs = require('./mock-dat.json');

const Job = require('./models/Job');

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    await Job.create(jsonJobs);
    console.log('Success!!');
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();
