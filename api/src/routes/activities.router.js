const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  handlerPostActivity,
  handlerGetActivities,
  handlerPutActivity,
  handlerDeleteActivity,
} = require("../handlers/handlersActivities.js");

const router = Router();

router.post("/", handlerPostActivity);
router.get("/", handlerGetActivities);
router.put("/:id", handlerPutActivity);
router.delete("/:id", handlerDeleteActivity)

module.exports = router;
