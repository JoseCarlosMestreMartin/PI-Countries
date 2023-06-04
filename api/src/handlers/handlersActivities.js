const {
  getAllActivities,
  createActivity,
  updateActivity,
  deleteActivity,
} = require("../controllers/controllerActivities");
const handlerGetActivities = async (req, res, next) => {
  try {
    const auxMat = await getAllActivities();
    return res.status(200).json(auxMat);
  } catch (error) {
    return res.status(400).json({ error: error.messaje });
  }
  //return res.send("📍 GET | /activities atravez del handler");
};

const handlerPostActivity = async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, idsCountries } = req.body;
    await createActivity(name, difficulty, duration, season, idsCountries);
    // console.log("auxActivity");
    // console.log(auxActivity);
    return res.status(200).json({ activity: "Actividad creada" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
  // return res.send("📍 Post | /activities atravez del handler");
};

const handlerPutActivity = async (req, res) => {
  const idActivity = req.params.id;
  const activityToChange = req.body;
  try {
    return res
      .status(200)
      .json(await updateActivity(activityToChange, idActivity));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  // return res.send("put activities a travez del handler");
};
const handlerDeleteActivity = async (req, res) => {
  const idActivity = req.body.idToDestroy;
  console.log("dentro del handel de delete");
  console.log("idActivity");
  console.log(idActivity);
  try {
    return res.status(200).json(await deleteActivity(idActivity));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
  //return res.send("delete una activity a travez del handler");
};

module.exports = {
  handlerPostActivity,
  handlerGetActivities,
  handlerPutActivity,
  handlerDeleteActivity,
};
