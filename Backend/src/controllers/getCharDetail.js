const axios = require("axios");


const getCharDetail = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
      const character = {
        id: data.id,
        name: data.name,
        image: data.image,
        species: data.species,
        status: data.status,
        status: data.origin?.name,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch(
      (error) =>
      res
        .writeHead(500, { "Content-type": "text/plain" })
        .end("Personaje no existe")
    );
};
module.exports ={ getCharDetail };

