import React from 'react'

const NuevoPresupuesto = () => {
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario'>
                <div className='campo'>
                    <label>Definir presupuesto</label>

                    <input
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Añade tu presupuesto'
                        />
                </div>

                <input type="submit" value="Añadir" />

            </form>
        </div>
    )
}

export default NuevoPresupuesto