const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening to server at port ${PORT}`);
});
