const { Activity, Country } = require("../db");
// const { Op } = require("sequelize");
const getAllActivities = async ()=>{
  const activitiesAll = await Activity.findAll({
    include: [{model: Country, through: {attributes: [] }}],
    order: [["id", "ASC"]],
  });
  return activitiesAll;  
};
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
const updateActivity = async (activityToUpdate, idActivity) => {
  await Activity.update(activityToUpdate, { where: { id: idActivity } });
  return ({ changed: true });
};

const deleteActivity = async (id)=>{
  console.log("dentro del controler de delete");
  console.log("id : ");
  console.log(id);
  await Activity.destroy({where: {id: id}});
  return({delete:true});
};
module.exports = {
  createActivity,
  updateActivity,
  getAllActivities,
  deleteActivity,
};
