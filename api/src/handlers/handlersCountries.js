const handlerGetCountriesByNameByQuery = async (req, res, next) => {
    const name = req.query.name;
    if (name) {
      //Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
      // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
      // Si no existe el país, debe mostrar un mensaje adecuado.
      
      return res.send("📍 GET | /countries/ query.name atravez de handler");
    } else {
      //Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
      return res.send("📍 GET | /countries All  atravez de handler");
    }
  };
  
  const handlerGetCountryByIdByParams = async (req, res) => {
    return res.send("📍 GET | /countries/:idPais desde el handler");
  };

  
  module.exports = {
    handlerGetCountriesByNameByQuery,
    handlerGetCountryByIdByParams,
  };
  