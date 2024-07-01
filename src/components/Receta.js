import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Receta = ({ receta }) => {
  //Configuracion del modal de material-ui - esto es como una pieza de state
  const [modalStyle] = useState(style);
  const [open, setOpen] = useState(false);

  // const classes = style()
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // extraer los valores del context
  const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);

//  Muestra y formatea los infredientes 
const mostrarIngredientes = informacion => {
    let Ingredientes = []
    for (let i = 1; i < 16; i++) {
        if(informacion[`strIngredient${i}`]){
            Ingredientes.push(
                <li>{informacion[`strIngredient${i}`] }{informacion[`strMeasure${i}`] }</li>

            )
        }
        
    }
    return Ingredientes
}


  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          className=" card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              guardarIdReceta(null);
              guardarReceta({});
              handleClose();
            }}
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h3" component="h2">
                {informacion.strDrink}
              </Typography>

              <h3 className="mt-4"> Instrucciones</h3>
              <p>{informacion.strInstructions}</p>
              <img className="img-fluid my-4" src={informacion.strDrinkThumb} />

              <h3>Ingredientes y cantidades</h3>
              <ul>
                {mostrarIngredientes(informacion)}
              </ul>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
