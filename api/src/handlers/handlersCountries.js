const axios = require("axios");
const { Country, Activity } = require("../db");
const {getCountriesAll} = require("../controllers/controlerCountries");

const handlerGetCountriesByNameByQuery = async (req, res, next) => {
  const name = req.query.name;
  if (name) {
    //Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
    // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    // Si no existe el país, debe mostrar un mensaje adecuado.

    return res.send("📍 GET | /countries/ query.name atravez de handler");
  } else {
    //Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.

    const matOfCountries = await getCountriesAll();
    // const matOfCountries = (
    //   await axios.get("https://restcountries.com/v3/all")
    // ).data.map((e) => {
    //   let aux = {
    //     id: e.cca3,
    //     name: e.name.common,
    //     imgFlag: e.flags[1],
    //     continent: e.continents[0],
    //     capital: e.capital ? e.capital[0] : "Not found",
    //     subregion: e.subregion ? e.subregion : "Not found",
    //     area: e.area,
    //     population: e.population,
    //   };

    //   if (aux.capital == "Papeetē") aux.capital = "Papeete";
    //   if (aux.capital == "Chișinău") aux.capital = "Chisinau";

    //   return aux;
    // });
    // //cargar en la db
    // await Country.bulkCreate(matOfCountries);

    // for (let i = 0; (i < matOfCountries.length); i++) {
    //   await Country.create(matOfCountries[i]);
    // console.log("i: ",i);
    // console.log(matOfCountries[i].capital);
    // }

    // return res.send("📍 GET | /countries All  atravez de handler");

    return res.status(200).json({ matOfCountries });
  }
};

const handlerGetCountryByIdByParams = async (req, res) => {
  return res.send("📍 GET | /countries/:idPais desde el handler");
};

module.exports = {
  handlerGetCountriesByNameByQuery,
  handlerGetCountryByIdByParams,
};
