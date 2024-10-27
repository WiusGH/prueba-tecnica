import { Box, Typography } from "@mui/material";
import React from "react";

const FreeShippingTag = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00FFF033",
        border: "1px solid #07706A",
        color: "#07706A",
        padding: "2px 4px",
        height: "fit-content",
        width: "fit-content",
      }}
    >
      <Typography variant="body2" sx={{ fontSize: "0.5rem" }}>
        ENVÍO GRATIS STGO
      </Typography>
    </Box>
  );
};

export default FreeShippingTag;
