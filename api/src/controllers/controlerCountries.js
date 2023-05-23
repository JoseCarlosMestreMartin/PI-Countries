const axios = require("axios");
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const getCountriesAll = async () => {
  console.log("entro en getCountriesAll");
  let matCountries = await Country.findAll();

  if (matCountries && matCountries.length > 0) {
    return matCountries;
  } else {
    ////
    let aux = (await axios.get("https://restcountries.com/v3/all")).data.map(
      (e) => {
        console.log("dentro del map");
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
    console.log("posta 2");
    matCountries = await Country.bulkCreate(aux);

    ////
    return matCountries;
  }
};

// const getCountriesByName = async (name) => {
//   const aux = await Country.findAll({
//     where: {
//       name: {
//         [Op.iLike]: "%" + name + "%",
//       },
//     },
//   });

//   return aux;
// };

module.exports = { getCountriesAll };
