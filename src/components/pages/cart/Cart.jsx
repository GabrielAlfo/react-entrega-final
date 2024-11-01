import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  const limpiarConAlert = () => {
    Swal.fire({
      title: "seguro quieres limpiar?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, dejar como estaba`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "se limpio el carrito",
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "el carrito queda como estaba",
        });
      }
    });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Este es el carrito</h2>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>Titulo {product.title}</h2>
            <h3>Precio {product.price}</h3>
            <h3>Cantidad {product.quantity}</h3>
            <h3>Subtotal : {product.price * product.quantity}</h3>
            <Button
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      {total > 0 && (
        <>
          <Button
            sx={{ marginTop: 20 }}
            variant="contained"
            onClick={limpiarConAlert}
          >
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button sx={{ marginTop: 20 }} variant="contained">
              Finalizar compra
            </Button>
          </Link>
        </>
      )}

      {total > 0 ? (
        <h2>El total a pagar es : $ {total}</h2>
      ) : (
        <h2>No tienes elementos todavia</h2>
      )}
    </div>
  );
};

export default Cart;
