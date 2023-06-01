const express = require("express");
const cors = require("cors");
const server = express();
const PORT = 3001;
const router = require("./routes/index");

server.use(express.json()); //para que funcione mi server con formato json
server.use(cors());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
