const axios = require("axios");
const { character } = require("../Db/DB_connection");

const getApiData = async () => {
  try {
    let allCharacters = [];
    for (let i = 0; i < 6; i++) {
      let  apiData = await axios(`https://rickandmortyapi.com/api/character/?page=${i}`);
      const pageCharacters = apiData.data.results.map((char) => {
        return {
          id: char.id,
          name: char.name,
          species: char.species,
          status: char.status,
          origin: char.origin?.name,
          gender: char.gender,
          image: char.image,
        };
      });
      allCharacters = [...allCharacters, ...pageCharacters];
    }
    //console.log(allCharacters);
    return allCharacters;
  } catch (error) {
    return { msg: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await character.bulkCreate(allCharacters);
    return allCharacters;
  } catch (error) {
    return { msg: error.message };
  }
};

module.exports = saveApiData;
