const mongoose = require("mongoose");

const databaseConnect = async () => {
  try {
    let connectionString =
      "mongodb+srv://admin:qwerty1@cluster0.bapgn.mongodb.net/_warhammer40k";
    await mongoose.connect(connectionString);
    console.log(`Database connected: ${connectionString}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = {
  databaseConnect,
};
