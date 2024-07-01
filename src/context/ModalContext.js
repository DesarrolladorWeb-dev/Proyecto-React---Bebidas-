import axios from 'axios'
import React , {createContext, useEffect, useState} from 'react'



// crear el context
export const ModalContext = createContext()

const ModalProvider = (props) => {
    // state del provider
    const [idreceta, guardarIdReceta] = useState(null)
    const [informacion, guardarReceta] = useState({})

    // usa vez que tenemos ina receta llamar a la api
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return
            const url =  `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            console.log(idreceta)
            const resultado = await axios.get(url)
            guardarReceta(resultado.data.drinks[0])

        }
        obtenerReceta()
    }, [idreceta])
    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta,

            }}
        >
            {props.children}
        </ModalContext.Provider>

     );
}
 
export default ModalProvider;