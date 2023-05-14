const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesCountries = require("./countries.router");
const routesActivities = require("./activities.router");

const router = Router();
router.use("/countries",routesCountries);
router.use("/activities",routesActivities);

module.exports = router;
