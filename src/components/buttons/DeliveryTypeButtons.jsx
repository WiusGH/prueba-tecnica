import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import { useTheme } from "@mui/material/styles";

const DeliveryTypeButtons = ({
  set,
  width,
  option1Icon,
  option2Icon,
  option1Text,
  option2Text,
}) => {
  const [selected, setSelected] = useState(null);
  const theme = useTheme();

  const handleSelect = (option) => {
    setSelected(option);
    set(option);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2, width }}>
      <Button
        onClick={() => handleSelect("option1")}
        variant="outlined"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `2px solid ${theme.palette.primary.main}`,
          gap: 1,
          padding: "1rem 0.5rem",
        }}
      >
        <Box
          component={"img"}
          src={option1Icon}
          alt="ícono de camión"
          sx={{ width: "20px", height: "20px" }}
        />
        <Typography variant="body2" sx={{ color: "black" }}>
          {option1Text}
        </Typography>
        {selected === "option1" ? (
          <CheckCircleIcon color="primary" fontSize="small" />
        ) : (
          <CircleIcon color="disabled" fontSize="small" />
        )}
      </Button>
      <Button
        onClick={() => handleSelect("option2")}
        variant="outlined"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `2px solid ${theme.palette.primary.main}`,
          gap: 1,
          p: 1,
        }}
      >
        <Box
          component={"img"}
          src={option2Icon}
          alt="ícono de tienda"
          sx={{ width: "20px", height: "20px" }}
        />
        <Typography variant="body2">{option2Text}</Typography>
        {selected === "option2" ? (
          <CheckCircleIcon color="primary" fontSize="small" />
        ) : (
          <CircleIcon color="disabled" fontSize="small" />
        )}
      </Button>
    </Box>
  );
};

export default DeliveryTypeButtons;
