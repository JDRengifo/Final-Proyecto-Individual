import React, { useEffect, useState } from "react";
import ReactSelect from 'react-select'
import {useDispatch, useSelector} from 'react-redux'
import { getCountries, postActivities } from "../../redux/actions";
import validate from "../../utils/validar/Validar";
import { Link } from "react-router-dom";
import './createActivities.css'

function CreateActivities (){
    const dispatch = useDispatch()
    const allCountries = useSelector((state)=> state.allCountries)
    const [error, setError] = useState({
      nombre: "", 
      duracion: "", 
      dificultad: "", 
      temporada: "",
    })
    const [actividades, setActividades]=useState({
        nombre: "", 
        duracion: "", 
        dificultad: "", 
        temporada: "",
        paises: [],
        nombrePaises: [],
      });
// console.log(actividades.paises)
      const handleChangeSelector = ({value, label})=>{
        
        setActividades({
          ...actividades,
          paises: actividades.paises.concat(value),
          nombrePaises: actividades.nombrePaises.concat(label)
        })
      }
        
      
      
      const handleChange =(event)=>{
        if (event.target.parentNode.parentNode.id === "temporada") {
            
              setActividades({
                ...actividades,
                temporada: event.target.value,
              });
              // console.log("Plataformas: ", actividades.temporada);
          
        }
        if (event.target.type !== "checkbox" ) {
          setActividades({
            ...actividades,
            [event.target.name]: event.target.value, // Sintaxis ES6 para actualizar la key correspondiente
          });
        }
        
       setError(validate({...actividades,[event.target.name]: event.target.value}))
      //  console.log(validate({...actividades,[event.target.name]: event.target.value}))
     }
    
      const onSubmit = (event)=>{
        event.preventDefault()
        
        dispatch(postActivities(actividades))
      }
      useEffect(()=>{
        dispatch(getCountries())
        
      },[dispatch])
    
      // console.log('linea 67',error)
    return(
       <div className="creaActivities">

          <h2>Crear Actividades en esta pagina</h2>
          <form className='activitieFormContainer' onSubmit={onSubmit}>
            <div className="createGrid">
                <div className="creaGrid1">
                    <div className="creaGrid11"></div>

                    <div className="creaGrid12">
                      <h3>Ingrese todos los datos para crear la actividad que desea añadir</h3>
                    </div>

                    <div className="creaGrid13">
                        <label className="label" htmlFor="nombre">Nombre de la actividad: </label>
                        <br />
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Ingrese el tipo de activadad"
                            value= {actividades.nombre}
                            onChange={handleChange}
                        />
                        <h4>{actividades.nombre}</h4>
                        {/* {console.log('linea 90',error)} */}
                        {error.nombre !== "" && <h4 className="errors">{error.nombre}</h4>}
                    </div>


                    <div className="creaGrid14">
                        <label className="label" htmlFor="duracion">Duración de la actividad en horas:</label>
                        <br />
                        <input
                            name="duracion"
                            type="number"
                            placeholder="Ingrese la duracion en horas"
                            value={actividades.duracion}
                            onChange={handleChange}
                        />
                        
                        {error.duracion !== "" && <h4 className="errors">{error.duracion}</h4>}
                    </div>
                    <div className="creaGrid15">
                        <label className="label" htmlFor="dificultad">Nivel de dificultad de la actividad:</label>
                        <br />
                        <input
                            name="dificultad"
                            className="dificultad"
                            type="number"
                            value={actividades.dificultad}
                            onChange={handleChange}
                        />
                        {error.dificultad !== "" && <h4 className="errors">{error.dificultad}</h4>}
                    </div>

                    <div className="creaGrid16"></div>

                    <div className="creaGrid17"></div>
                </div>

              <div className="creaGrid2">
                <div>
                  <h4>Elija el País (o paises) a asociar la actividad.</h4>
                  <ReactSelect 
                      id = 'selectorPaises'
                      options = {allCountries.map((country)=> ({label:country.nombre, value:country.id}))}
                      onChange={handleChangeSelector}
                  /><br />
                  <h2>{actividades.nombrePaises.join(', ')}</h2>
                  {error.paises !== "" && <h4 className="errors">{error.paises}</h4>}
                </div>
              </div>

              <div className="creaGrid3">
                <div className="creaGrid31">
                    <div>
                      <div id="temporada" className="temporada" name="inputTemporada" onChange={handleChange}>
                      <label className="labelTemporada" htmlFor="temporada">Elija La Temporada Del Año:</label>

                          <div className="Verano">
                          <input name="temporada" value="Verano" type="radio" id="Verano" />
                          <label htmlFor="verano">Verano</label>
                          </div>
          
                          <div className="invierno">
                              <input name="temporada" value="Invierno" type="radio" id="invierno"/>
                              <label htmlFor="invierno">Invierno</label>
                          </div>
          
                          <div className="otono">
                              <input name="temporada" value="Otoño" type="radio" id="otono" />
                              <label htmlFor="otono">Otoño</label>
                          </div>

                          <div className="primavera">
                              <input name="temporada" value="Primavera" type="radio" id="primavera"/>
                              <label htmlFor="primavera">Primavera</label>
                          </div>
                          {error.temporada !== "" && <h4 className="errors">{error.temporada}</h4>}
                      </div>
                    </div>

                   </div>

                    <div className="creaGrid32">
                      <button type='submit'>Crear Actividad</button>
                      <br />
                      <Link to='/home'>
                            <button>Volver a Home</button>
                      </Link>
                    </div>

               </div>
            </div>
          </form>
           


        </div>
    )
}

export default CreateActivities;