const axios = require("axios");
const { Country, Activity } = require("../db");

const getCountriesFromDB = async () => {
  const arrayAuxCountries = await Country.findAll();
  if (arrayAuxCountries.length > 0) {
    return arrayAuxCountries;
  } else {
    const result = (await axios.get("https://restcountries.com/v3/all")).data;
    console.log("largo de result: ", result.length);
    const arrayCountries = resumeData(result);

    //await Country.bulkCreate(arrayCountries);
    return await Country.findAll();
  }
};

const resumeData = (data) => {
  return data.map((c) => {
    console.log(c.name.common);
    if (
      !c.cca3 ||
      !c.name.common ||
      !c.flags[1] ||
      !c.continents[0] ||
      !c.capital ||
      !c.subregion ||
      !c.area ||
      !c.population
    ) {
        let aux ={
            id: c.cca3,
            name: c.name.common,
            imgFlag: c.flags[1],
            continent: c.continents[0],
            capital: c.capital,
            subregion: c.subregion,
            area: c.area,
            population: c.population,
          };
        // console.log(aux);
        // console.log("k---------------------------------------n");
    } else {
      return {
        id: c.cca3 ? c.cca3 : c.cioc,
        name: c.name.common,
        imgFlag: c.flags[1],
        continent: c.continents[0],
        capital: c.capital[0] ? c.capital[0] : "Sin registro de la capital",
        subregion: c.subregion ? c.subregion : "Sin registro de subregion",
        area: c.area,
        population: c.population,
      };
    }
    
  });
};
module.exports = {
  getCountriesFromDB,
};
