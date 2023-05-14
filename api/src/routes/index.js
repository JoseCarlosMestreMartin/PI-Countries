const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { handlerGetCountries, handlerGetCountryByIdByParams, handlerPostActivity, handlerGetActivities } = require('../handlers/handler.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", handlerGetCountries);
router.get("/countries/:idPais", handlerGetCountryByIdByParams);
router.post("/activities", handlerPostActivity);
router.get("/activities", handlerGetActivities);

module.exports = router;
