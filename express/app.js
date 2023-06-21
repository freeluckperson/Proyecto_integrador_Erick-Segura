const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const { sequelize } = require("./Db/DB_connection");
const saveApiData = require("./controlers/saveApiData");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, async () => {
  await sequelize.sync({ force: true });
  await saveApiData();
  console.log("Server raised in port: " + PORT);
});
