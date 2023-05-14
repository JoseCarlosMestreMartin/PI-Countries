  const handlerPostActivity = async (req, res, next) => {
    return res.send("📍 Post | /activities atravez del handler");
  };
  const handlerGetActivities = async (req, res, next) => {
    return res.send("📍 GET | /activities atravez del handler");
  };
  
  module.exports = {
    handlerPostActivity,
    handlerGetActivities,
  };
  