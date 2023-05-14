const { Router } = require("express");

const {
  handlerGetCountries,
  handlerGetCountryByIdByParams,
} = require("../handlers/handler.js");

const router = Router();

router.get("/", handlerGetCountries);
router.get("/:idPais", handlerGetCountryByIdByParams);

module.exports = router;
