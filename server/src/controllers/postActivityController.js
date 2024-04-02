const {Activity, } = require("../db");

const createActivityBd = async (nombre, duracion, dificultad, temporada, paises) => {
    console.log(paises,)

    const newActivity = await Activity.create({nombre, duracion, dificultad, temporada})
   
     newActivity.addCountry(paises);
   
    return newActivity
    
    // return await Activity.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createActivityBd};