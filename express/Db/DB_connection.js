require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require("sequelize");
//const charater = require("../models/Character");
const { user, favorite } = require("../models/index");

/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/

//charater(sequelize);
//
user(sequelize);
//
favorite(sequelize);

/***************************************************************************/
//RELACIONES
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

// module.exports = {
//   // ...sequelize.models,
//   conn: sequelize,
//   Character,
//   sequelize,
// };
