const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const { conn } = require("./Db/DB_connection");

//const saveApiData = require("./controlers/saveApiData");

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
  await conn.sync({ force: true });
  console.log("Server raised in port: " + PORT);
});

//{ force: true } DROP (delete) a todas las tablas y vuelve a crear
//{ force: false } mantiene todo igual y persistente
//{ alter: true } actualiza y no perdemos datos se utiliza muy poco
//sequelize.define() toma un obj y lo convierte en tabla
//sequelize.sync levanta la Db
