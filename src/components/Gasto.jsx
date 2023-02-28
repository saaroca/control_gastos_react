import React from 'react'
import { formatearFecha } from '../helpers'
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

//donde estan todos los iconos para los gastos
const diccionarioIconos = {
    ahorro : IconoAhorro,
    comida : IconoComida,
    casa : IconoCasa,
    gastos : IconoGastos,
    ocio : IconoOcio,
    salud : IconoSalud,
    suscripciones : IconoSuscripciones
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto }) => {

  const { categoria, nombre, cantidad, fecha, id } = gasto

  //La funcion para editar los gastos
  const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(gasto)}>
            Editar
        </SwipeAction> 
    </LeadingActions>
  )

  //La funcion para eliminar los gastos
  const trailingActions = () => (
    <TrailingActions>
        <SwipeAction onClick={() => eliminarGasto(id)}
                    destructive={true}>
            Eliminar
        </SwipeAction>
    </TrailingActions>
  )
  return (
    //libreria react donde se pueden swipear izq o derech los items
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}>
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                    <img
                        src={diccionarioIconos[categoria]}
                        alt="icono gasto"
                    />
                <p className='categoria'>{categoria}</p>    
                <p className='nombre-gasto'>{nombre}</p>   
                <p className='fecha-gasto'>
                    Agregado el: {''}
                    <span>{formatearFecha(fecha)}</span>    
                </p> 
            </div> 
            <p className='cantidad-gasto'>${cantidad}</p>
        </div>
    </div>
        </SwipeableListItem>
    </SwipeableList>
    )
}

export default Gasto