const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
  const { detailId } = req.params;
  try {
    const { data } = await axios(URL + detailId);
    const { id, name, species, image, gender, status, origin } = data;
    return res
      .status(200)
      .json({ id, name, species, image, gender, status, origin: origin.name });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharDetail };
