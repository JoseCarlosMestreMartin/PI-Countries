const axios = require("axios");
const { Country, Activity } = require("../db");
const {
  getCountriesAll,
  getCountriesByName,
  getCountryByIdByParams,
} = require("../controllers/controlerCountries");

const handlerGetCountriesByNameByQuery = async (req, res, next) => {
  try {
    const name = req.query.name;
    if (name) {
      //Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
      // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
      // Si no existe el país, debe mostrar un mensaje adecuado.
      const mat = await getCountriesByName(name);
      console.log("mat, name: ", name);
      console.log(mat);
      return res.status(200).json(mat);

      // return res.send("📍 GET | /countries/ query.name atravez de handler");
    } else {
      //Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
      const matOfCountries = await getCountriesAll();
      return res.status(200).json(matOfCountries);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetCountryByIdByParams = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("req.params: ", req.params);
    console.log("id: ", id);
    const countryObj = await getCountryByIdByParams(id);
    return res.status(200).json(countryObj);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerGetCountriesByNameByQuery,
  handlerGetCountryByIdByParams,
};
