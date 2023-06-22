const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   isEmail: true,
        // },
      },

      password: {
        type: DataTypes.STRING(68),
        allowNull: false,
        // validate: {
        //     is: ["^[a-z]+$",'i'], //REGEX
        // },
      },


    },
    { timestamps: false }
  );
};
