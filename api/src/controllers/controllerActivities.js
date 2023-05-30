const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const auxActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  countries.map(async (id) => {
    const idCountry = id.toUpperCase(); 
    const country = await Country.findOne({
      where: {
        id: idCountry,
      },
    });
    auxActivity.addCountry(country);
  });
  return auxActivity;
};

module.exports = {
  createActivity,
};
