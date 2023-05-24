const { Router } = require("express");

const {
  handlerGetCountriesByNameByQuery,
  handlerGetCountryByIdByParams,
} = require("../handlers/handlersCountries.js");

const router = Router();

router.get("/", handlerGetCountriesByNameByQuery);
router.get("/:id", handlerGetCountryByIdByParams);

module.exports = router;
