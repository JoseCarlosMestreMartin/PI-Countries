const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      idCountry: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgFlag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Sin registro",
      },
      subregion: {
        type: DataTypes.STRING,
        defaultValue: "Sin registro",
      },
      area: {
        type: DataTypes.FLOAT,
        get() {
          const areaValue = this.getDataValue("area");
          return !areaValue ? `0 km2` : `${areaValue} km2`;
        },
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
