import { Box, Typography } from "@mui/material";
import React from "react";
import DiscountTag from "../buttons/DiscountTag";
import { useTheme } from "@mui/material/styles";

const PriceTag = ({ price, discount }) => {
  const formatPrice = (price) => {
    const roundedPrice = Math.floor(price);
    return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {discount && <DiscountTag discount={discount} />}
      <Typography
        variant="h5"
        sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
      >
        ${formatPrice(price - price * (discount / 100))}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: "bold",
          marginLeft: "1rem",
          textDecoration: "line-through",
        }}
      >
        ${formatPrice(price)}
      </Typography>
    </Box>
  );
};

export default PriceTag;
