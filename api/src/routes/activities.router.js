const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  handlerPostActivity,
  handlerGetActivities,
} = require("../handlers/handlersActivities.js");

const router = Router();

router.post("/", handlerPostActivity);
router.get("/", handlerGetActivities);
router.put("/id",handlerChangeActivity);
router.delete("/id",handleDeleteActivity);

module.exports = router;
