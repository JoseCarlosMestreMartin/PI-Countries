const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { handlerPostActivity, handlerGetActivities } = require('../handlers/handler.js');

const router = Router();

 router.post("/", handlerPostActivity);
 router.get("/", handlerGetActivities);

module.exports = router;
