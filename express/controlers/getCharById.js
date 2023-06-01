const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { onsearchId } = req.params;
  try {
    const response = await fetch(URL + onsearchId);
    const data = await response.json();
    const { id, name, species, image, gender, status, origin } = data;
    return res.status(200).json({ id, name, species, image,  gender, status, origin: origin?.name });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharById };




