const handlerGetCountries = async (req, res, next) => {
  const name = req.query.name;
  if (name) {
    return res.send("📍 GET | /countries/ query.name atravez de handler");
  } else {
    return res.send("📍 GET | /countries All  atravez de handler");
  }
};

const handlerGetCountryByIdByParams = async (req, res) => {
  return res.send("📍 GET | /countries/:idPais desde el handler");
};

const handlerPostActivity = async (req, res, next) => {
    return res.send("📍 Post | /activities atravez del handler");
};
const handlerGetActivities = async (req, res, next) => {
    return res.send("📍 GET | /activities atravez del handler");
}

module.exports = { handlerGetCountries, handlerGetCountryByIdByParams, handlerPostActivity, handlerGetActivities };
