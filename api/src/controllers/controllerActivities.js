const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  idsCountries
) => {
  const auxActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  // idsCountries.map(async (id) => {
  //   const idCountry = id.toUpperCase(); 
  //   const country = await Country.findOne({
  //     where: {
  //       id: idCountry,
  //     },
  //   });
  //   auxActivity.addCountry(country);
  // });
  idsCountries.map(async (idC) => {
    const country = await Country.findByPk(idC);
    country.addActivity(auxActivity);
  });
  return auxActivity;
};

module.exports = {
  createActivity,
};
