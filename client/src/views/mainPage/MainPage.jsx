import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import video_egipto from '../../../src/utils/video_egipto.mp4'
import video_dubai from '../../../src/utils/video_dubai.mp4'
import banderas from '../../../src/utils/banderas.png'
import cubo8_1 from '../../../src/utils/cubo8_1.png'
import cubo8_2_1 from '../../../src/utils/cubo8_2_1.png'
import cubo8_2_2 from '../../../src/utils/cubo8_2_2.png'
import mundoParaViajar from '../../../src/utils/mundoParaViajar.png'

import './mainPage.css'

function MainPage() {
 

  return (
    <div className='mainPageContainer'>
    <div>
      <h1 className='mainTitlle'>PROYECTO PAISES DEL MUNDO</h1>
    </div>
        <div className='mainGrid'>
          <div className='cubo1'>
            <ReactPlayer
            className='videoEgipto'
              url={video_egipto}
              width= '100%'
              height= '100%'
              muted
              playing
              loop
            />
          </div>
          <div className='cubo2'>
            <h2 className='titlleMain'>Proyecto Paises</h2>
          </div>
          <div className='cubo3'>
            <img src={banderas} alt="banderas" className='band'/>
          </div>
          <div className='cubo4'></div>
          <div className='cubo5'>
            <p>En esta página podras
            encontrar diferentes
            actividades turísticas
            que te ayudaran a
            planificar tus
            próximas vacaciones</p>
            {/* <img src={mundoParaViajar} alt="mundoViajero" className='mundoViajero'/> */}
          </div>
          <div className='cubo6'>
            
            </div>
          <div className='cubo7'>
          <ReactPlayer
              url={video_dubai}
              width= '100%'
              height= '100%'
              muted
              playing
              loop
            />
          </div>
          <div className='cubo8'>
            <div className='cubo8_1'>
            <img src={cubo8_1} alt="viajeros" className='viajando'/>
            </div>
            <div className='cubo8_2'>
              <div className='cubo8_2_1'>
                <img src={cubo8_2_1} alt="viajeros" className='lasVegas'/>
              </div>
              <div className='cubo8_2_2'>
                <img src={cubo8_2_2} alt="viajeros" className='laPlaya'/>
              </div>
            </div>
            </div>
          <div className='cubo9'>
            <button className='buttonMain'>
            <Link to='/home'>INGRESAR</Link>  
            </button>
          </div>
         
        </div>
    </div>
  )
}

export default MainPage
