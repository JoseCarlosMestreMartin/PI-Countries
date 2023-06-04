const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  handlerPostActivity,
  handlerGetActivities,
  handlerPutActivity,
  handlerDeleteActivity,
} = require("../handlers/handlersActivities.js");

const {validateActivity} = require("../middlewares/index");
const router = Router();

router.post("/",validateActivity, handlerPostActivity);
router.get("/", handlerGetActivities);
router.put("/:id",validateActivity, handlerPutActivity);
router.delete("/", handlerDeleteActivity)


module.exports = router;
