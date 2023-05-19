const axios = require("axios");
const { Activity, Country } = require("../db");

const getCountriesAll = async () => {
  let matCountries = await Country.findAll();

  if (matCountries && matCountries.length > 0) {
    return matCountries;
  } else {
    ////
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
    matCountries = await Country.bulkCreate(aux);

    ////
  }

  return matCountries;
};

module.export = {getCountriesAll,};