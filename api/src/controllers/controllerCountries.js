const axios = require("axios");
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const getCountriesAll = async () => {
  let matCountries = await Country.findAll({
    include: [{ model: Activity, through: { attributes: [] } }],
    order: [["name", "ASC"]],
  });

  if (matCountries && matCountries.length > 0) {
    return matCountries;
  } else {
    let aux = (await axios.get("https://restcountries.com/v3/all")).data.map(
      (e) => {
        let aux = {
          id: e.cca3,
          name: e.name.common,
          imgFlag: e.flags[1],
          continent: e.continents[0],
          capital: e.capital ? e.capital[0] : "Not found",
          subregion: e.subregion ? e.subregion : "Not found",
          area: e.area,
          population: e.population,
        };

        if (aux.capital == "Papeetē") aux.capital = "Papeete";
        if (aux.capital == "Chișinău") aux.capital = "Chisinau";

        return aux;
      }
    );
    //cargar en la db
    await Country.bulkCreate(aux);
    matCountries = await Country.findAll({
      include: [{ model: Activity, through: { attributes: [] } }],
      order: [["name", "ASC"]],
    });
    return matCountries;
  }
};

const getCountriesByName = async (name) => {
  const aux = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: "%" + name + "%",
      },
    },
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    },
    order: [["name", "ASC"]],
  });

  return aux;
};

const getCountryByIdByParams = async (id) => {
  const auxObj = await Country.findByPk(id.toUpperCase(), {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    },
  });
  console.log("auxObj");
  console.log(auxObj);
  return auxObj;
};

module.exports = {
  getCountriesAll,
  getCountriesByName,
  getCountryByIdByParams,
};
