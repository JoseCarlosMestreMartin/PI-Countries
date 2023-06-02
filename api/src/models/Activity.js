const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      idActivity: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
        defaultValue: 3,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        get() {
          const durationValue = this.getDataValue("duration");
          return `${durationValue} hora(s)`;
        },
      },
      season: {
        type: DataTypes.ENUM(["summer", "winter", "spring", "autumn"]),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
