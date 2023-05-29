const {getAllActivities, createActivity} = require("../controllers/controllerActivities");
const handlerGetActivities = async (req, res, next) => {
  try {
    const auxMat = await getAllActivities();
    return res.status(200).json({ej: "ejemplo get all activities"}); 
  } catch (error) {
    return res.status(400).json({error: error.messaje});
  }
  //return res.send("📍 GET | /activities atravez del handler");
};

const handlerPostActivity = async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const auxActivity = createActivity(name, difficulty, duration, season, countries);
    console.log("auxActivity");
    console.log(auxActivity);
    return res.status(200).json({activity: "Actividad creada"});
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
  // return res.send("📍 Post | /activities atravez del handler");
};

const handlerPutActivity = async (req, res) => {
  return res.send("put activities a travez del handler");
};
const handlerDeleteActivity = async(req , res) => {
  return res.send("delete una activity a travez del handler");
};

module.exports = {
  handlerPostActivity,
  handlerGetActivities,
  handlerPutActivity,
  handlerDeleteActivity,
};
