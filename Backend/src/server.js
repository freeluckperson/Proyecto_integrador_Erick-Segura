const http = require("http");
const characters = require("./utils/data");
const { stringify } = require("querystring");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //esta linea le acceso a nuestro backend a cualquier persona
    const { url } = req;
    if (url.includes("rickandmorty/character")) {
      const id = url.split("/")[3];
      const character = characters.filter(char => char.id === Number(id));
      res.writeHead(200, { "Content-Type": "application-json" });
      res.end(JSON.stringify(character[0]));
    }
  })
  .listen(PORT, "localhost");
