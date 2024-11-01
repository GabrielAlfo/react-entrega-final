import { Button } from "@mui/material";
import "./counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div>
      <Button variant="contained" color="success" onClick={sumar}>
        Sumar
      </Button>
      <h2>{contador}</h2>
      <Button variant="contained" color="success" onClick={restar}>
        Restar
      </Button>

      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
