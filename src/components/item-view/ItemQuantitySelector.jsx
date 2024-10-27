import { Box } from "@mui/material";
import React from "react";
import QuantitySelector from "../buttons/QuantitySelector";
import AddToCartButton from "../buttons/AddToCartButton";

const ItemQuantitySelector = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, marginRight: "1%" }}>
      <QuantitySelector width={"30%"} />
      <AddToCartButton
        color="main"
        text="Agregar al carrito"
        width={"65%"}
        onClick={() => {}}
      />
    </Box>
  );
};

export default ItemQuantitySelector;
