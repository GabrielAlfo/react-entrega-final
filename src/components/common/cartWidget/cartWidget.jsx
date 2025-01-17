import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import ProductCard from "../productCard/ProductCard";
const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  const totalItems = getTotalItems();
  return (
    <div>
      <Badge badgeContent={totalItems} color="primary" max={30} showZero={true}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
