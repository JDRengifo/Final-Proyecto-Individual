import React from "react";
import EmojiPicker from "emoji-picker-react";
import './pagination.css';

const Pagination = ({
    paginaActual, 
    setPaginasActual, 
    numDePaginasTotal
} )=>{

    const handlerAnterior = ()=>{
        if(paginaActual !== 1) setPaginasActual(paginaActual-1);
    }

    const handlerPosterior = ()=>{
        if(paginaActual !== numDePaginasTotal) setPaginasActual(paginaActual+1);
        
    }

    return(
        <div className="paginationContainer">
            <div className="controllerPag">
                <h2 id='h2pag' className="paguinar" onClick={handlerAnterior}>Anterior</h2>
                <h2 className="paguinar">Pagina {paginaActual}/de {numDePaginasTotal}</h2>
                <h2 id='h2pag' className="paguinar" onClick={handlerPosterior}>Siguente</h2>
            </div>
        </div>
    )
}

export default Pagination;