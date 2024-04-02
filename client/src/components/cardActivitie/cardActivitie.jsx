import './cardActivitie.css'

function CardAdtivitie({items}) {
   
 const {nombre, duracion, dificultad, temporada} = items

  return (
    <div className='activitieContainer'>
      
      <h2>{nombre}</h2>
      <p>{duracion}</p>
      <p>{dificultad}</p>
      <p>{temporada} </p>
    </div>  

  )
}

export default CardAdtivitie
