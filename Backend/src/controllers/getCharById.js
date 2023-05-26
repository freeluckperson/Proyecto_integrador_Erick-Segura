const axios = require("axios");


const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
      const character = {
        id: data.id,
        name: data.name,
        image: data.image,
        species: data.species,
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
module.exports ={ getCharById };

