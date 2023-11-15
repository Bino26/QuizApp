const mongoose = require("mongoose");

const connectiontoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Sucessfuly connected to the database at ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectiontoDb;
