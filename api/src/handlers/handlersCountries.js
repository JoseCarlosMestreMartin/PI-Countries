const axios = require("axios");
const { Country, Activity } = require("../db");

const handlerGetCountriesByNameByQuery = async (req, res, next) => {
  const name = req.query.name;
  if (name) {
    //Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
    // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    // Si no existe el país, debe mostrar un mensaje adecuado.

    return res.send("📍 GET | /countries/ query.name atravez de handler");
  } else {
    //Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.

    const matOfCountries = (
      await axios.get("https://restcountries.com/v3/all")
    ).data.map((e) => {
      let aux = {
        id: e.cca3,
        name: e.name.common,
        imgFlag: "americano", //e.flags[1],
        continent: e.continents[0],
        // capital: e.capital ? e.capital[0] : "Not found Capital", //e.capital[0] : "Not found Capital",
        subregion: "americano", //e.subregion,
        area: 10, //e.area,
        population: 22, //e.population,
      };
      if(e.capital && e.capital.length>0 && (typeof e.capital[0] == "string")){
        aux.capital = e.capital[0];
        if (aux.capital == "Papeetē") aux.capital = "Papeete";
        if (aux.capital == "Chișinău") aux.capital = "Chisinau";
      }else{
        aux.capital = "Not found Capital";
      } 

      return aux;
    });
    //cargar en la db
    // console.log(
    //   "matOfCountries.data:---------------------------------------------"
    // );
    // console.log(matOfCountries);
    // await Country.bulkCreate(matOfCountries);
    for (let i = 0; (i < matOfCountries.length); i++) {
      await Country.create(matOfCountries[i]);  
    console.log("i: ",i);
    console.log(matOfCountries[i].capital);
    }
 
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
