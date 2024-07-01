// con context la informacion fluye desde este contenxt
import axios from 'axios';
import React, {createContext , useState , useEffect} from 'react'

//Crear el Context
export const CategoriasContext = createContext();

// privider  es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
 
    // crear el state del Context
    const [categorias, guardarCategorias] = useState([])

    // ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categorias = await axios.get(url)
            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    }, [])


    // todo lo que coloque en el  <CategoriasContext.Provider como value estara disponible     
    // ? recordar colocarlo en el arbol de componentes : Appjs 
    return(
        <CategoriasContext.Provider
            value={{
                // ahora estaran disponibles en todos los componentes
                categorias
            }}  
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
// para que este disponible y donde estare usando es en el componente principal
export default CategoriasProvider