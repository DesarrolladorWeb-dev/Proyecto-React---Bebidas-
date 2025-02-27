import React, {useContext} from 'react'
import Receta from './Receta'
import {RecetasContext} from '../context/RecetasContext'


const  ListRecetas = () => {

  //extraer las recetas
  const {recetas} = useContext(RecetasContext)
  // console.log(recetas)

  return (
    <div className='row mt-5'>
        {recetas.map(receta => (
          <Receta
            key = {receta.idDrink}
            receta={receta}
          />
        ))}
    </div>
  )
}

export default ListRecetas