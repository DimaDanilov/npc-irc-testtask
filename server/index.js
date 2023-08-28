const express = require("express");
require("dotenv").config();

const sequelize = require("./db");
const router = require("./routes/index");
const backend_port = process.env.BACKEND_PORT || 8000;

const app = express();
app.use(express.json()); // for parsing application/json

app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(backend_port, () =>
      console.log(`SERVER STARTED ON PORT ${backend_port}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
