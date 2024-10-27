import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";

/**
 * Botón personalizable para agregar ítems a un carrito.
 *
 * @param {string} color Opciones: "main", "light", o "secondary".
 * @param {string} text
 * @param {number} width
 * @param {function} onClick Función que se ejecuta al hacer clic en el botón.
 */
const AddToCartButton = ({ color, text, width, onClick }) => {
  const theme = useTheme();
  let finalColor = {};
  if (color === "main") {
    finalColor = {
      backgroundColor: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
      color: "white",
    };
  } else if (color === "light") {
    finalColor = {
      backgroundColor: "white",
      border: `2px solid ${theme.palette.primary.main}`,
      color: "black",
    };
  } else {
    finalColor = {
      backgroundColor: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
      color: "white",
    };
  }

  return (
    <Button
      sx={{
        ...finalColor,
        padding: "0.2rem 0",
        textTransform: "none",
        width: width,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default AddToCartButton;
