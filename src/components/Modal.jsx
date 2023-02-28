import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({setModal, 
                animarModal, 
                setAnimarModal, 
                guardarGasto, 
                gastoEditar,
                setGastoEditar
              }) => {

  const [mensaje, setMensaje] = useState('')

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState('')

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  },[])

  //Desmonta el componente modal en medio segundo
   const ocultarModal = () => {
    setModal(false)
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 500)
   } 

   const handleSubmit = e => {
    e.preventDefault()
    
    if([nombre,cantidad,categoria].includes('')){
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }

    guardarGasto({nombre, cantidad, categoria, id, fecha})
   }
  return (
    <div className="modal">
        <div className="cerrar-modal"> 
        <img
            src={CerrarBtn}
            alt='cerrar modal'
            onClick={ocultarModal}
        />
        </div>

        <form 
            className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
            onSubmit={handleSubmit}
        >
          <legend>{gastoEditar.nombre ? "Editar Gasto" : 'Nuevo Gasto'}</legend>
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

          <div className='campo'>
            
            <label htmlFor='nombre'>Nombre Gasto</label>

            <input
                id='nombre'
                type="text"
                placeholder='Añade el Nombre del Gasto'
                value={nombre}
                //e sirve para acceder a lo que escriba el usuari en input
                onChange={ e => setNombre(e.target.value)}
                />
          </div>

          <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>

            <input
                id='cantidad'
                type="number"
                placeholder='Añade La cantidad del gasto'
                value={cantidad}
                //e sirve para acceder a lo que escriba el usuari en input
                onChange={ e => setCantidad(Number(e.target.value))}
                />
          </div>

          <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>
            <select
            id="categoria"
            value={categoria}
            //e sirve para acceder a lo que escriba el usuari en el select leera lo que se ponga en el value
            onChange={ e => setCategoria(e.target.value)}
                  >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                  </select>
          </div>

          <input
              type="submit"
              value={gastoEditar.nombre ? "Guardar Cambios" : 'Añadir Gasto'}
              />

        </form>
    </div>
  )
}

export default Modal