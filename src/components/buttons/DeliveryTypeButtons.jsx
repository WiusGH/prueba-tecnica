import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import selectedItemIcon from "../../assets/images/selected-item-icon.svg";
import unselectedItemIcon from "../../assets/images/unselected-item-icon.svg";
import movingTruckIcon from "../../assets/images/moving-truck-icon.svg";
import storeIcon from "../../assets/images/store-icon.svg";
import { useTheme } from "@mui/material/styles";

/**
 * Componente que muestra dos botones para seleccionar un tipo de entrega.
 * @param {{ set: Function, option1: String, option2: String }} props
 * @returns {JSX.Element}
 */
const DeliveryTypeButtons = ({ set, option1, option2 }) => {
  const [selected, setSelected] = useState(null);
  const theme = useTheme();

  const handleSelect = (option) => {
    setSelected(option);
    set(option);
  };

  return (
    <Box
      sx={{ display: "flex", gap: 2, marginBottom: 2, width: "fit-content" }}
    >
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
          padding: "0.5rem 1rem",
        }}
      >
        <Box
          component={"img"}
          src={movingTruckIcon}
          alt="ícono de camión"
          sx={{ width: "15px", height: "15px" }}
        />
        <Typography
          variant="body2"
          sx={{ fontSize: "14px", textTransform: "none" }}
        >
          {option1}
        </Typography>
        {selected === "option1" ? (
          <Box component={"img"} src={selectedItemIcon} alt="seleccionado" />
        ) : (
          <Box
            component={"img"}
            src={unselectedItemIcon}
            alt="no seleccionado"
          />
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
          src={storeIcon}
          alt="ícono de tienda"
          sx={{ width: "15px", height: "15px" }}
        />
        <Typography
          variant="body2"
          sx={{ fontSize: "14px", textTransform: "none" }}
        >
          {option2}
        </Typography>
        {selected === "option2" ? (
          <Box component={"img"} src={selectedItemIcon} alt="seleccionado" />
        ) : (
          <Box
            component={"img"}
            src={unselectedItemIcon}
            alt="no seleccionado"
          />
        )}
      </Button>
    </Box>
  );
};

export default DeliveryTypeButtons;
