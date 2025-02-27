import React, {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'
const  Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre : '',
        categoria : ''
    })

    // ahora tendre disponible todo el value de CategoriasContext
    const {categorias} = useContext(CategoriasContext)
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext)
    
    // funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return (
    <form
        className='col-12'
        onSubmit={
            e => {e.preventDefault();
                buscarRecetas(busqueda)
                guardarConsultar(true)
            }
        }
    >
        <fieldset className='text-center'>
            <legend>Buscar bebidas por categoria o Ingredientes</legend>
        </fieldset>
        <div className='row mt-4'>
            <div className='col-md-4'>
                <input 
                    type="text" 
                    name="nombre" 
                    className='form-control'
                    placeholder='Buscar por Ingrediente'
                    onChange={obtenerDatosReceta}
                    />
            </div>
            <div className='col-md-4'>
                <select
                    className='form-control'
                    name='categoria'
                    onChange={obtenerDatosReceta}

                >
                    <option value="">-- Seleccionar Categoria --</option>
                    {categorias.map(categoria => (
                        <option 
                        key={categoria.strCategory}
                        value={categoria.strCategory}
                        > {categoria.strCategory}</option>
                    ))

                   }
                </select>
            </div>
            <div className='col-md-4'>
            <input 
                    type="submit" 
                    value="Buscar Bebidas" 
                    className='btn btn-block btn-primary'
                    
                    />
            </div>

        </div>
    </form>
  )
}

export default Formulario