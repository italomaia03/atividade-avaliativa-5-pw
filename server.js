require("dotenv").config();
const { default: mongoose } = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT;

const startServer = () => {
  const mongoUri = process.env.MONGO_URI;
  const mongoOptions = {
    retryWrites: true,
    w: "majority",
    appName: "Cluster0",
  };
  app.listen(PORT, async () => {
    await mongoose.connect(mongoUri, mongoOptions);
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
