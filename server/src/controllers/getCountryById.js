const { Country, Activity } = require('../db')

const getCountryById = async (id)=>{
    // console.log(id)
    const country = await Country.findByPk(id, {
        include: {
            model: Activity, 
            attributes: ["nombre", "dificultad", "duracion", "temporada"],
            through:{
                attributes: [],
            },
        },
    });
    if(!country) throw Error("País no Registrado o no existe")
    return country;
}

module.exports ={
    getCountryById,
    
}