import { Box, Typography } from "@mui/material";
import React from "react";
import useTheme from "@mui/material/styles/useTheme";

/**
 * Un componente de etiqueta de descuento.
 * 

 * @param {number} discount - El porcentaje de descuento.
 */
const DiscountTag = ({ discount }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "8px",
        color: "white",
        padding: "5px 30px",
        width: "70px",
      }}
    >
      <Typography variant="body2">-{discount}%</Typography>
    </Box>
  );
};

export default DiscountTag;
