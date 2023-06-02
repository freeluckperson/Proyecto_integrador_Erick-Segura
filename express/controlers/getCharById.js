const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(URL + id)
    .then(({ data }) => {
      const { name, gender, species, origin, image, status } = data;
      const character = { id, name, gender, species, origin: origin.name, image, status };

      return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Not found");
    })
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};

module.exports = getCharById;
