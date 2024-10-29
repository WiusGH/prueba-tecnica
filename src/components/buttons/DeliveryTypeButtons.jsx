import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import DeliveryModal from "../modals/DeliveryModal";
import PickupModal from "../modals/PickUpModal";
import selectedItemIcon from "../../assets/images/selected-item-icon.svg";
import unselectedItemIcon from "../../assets/images/unselected-item-icon.svg";
import movingTruckIcon from "../../assets/images/moving-truck-icon.svg";
import storeIcon from "../../assets/images/store-icon.svg";
import { useTheme } from "@mui/material/styles";

const DeliveryTypeButtons = ({ set, option1, option2 }) => {
  const [selected, setSelected] = useState(null);
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);
  const [storePickupModalOpen, setStorePickupModalOpen] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const theme = useTheme();

  const handleSelect = (option) => {
    setSelected(option);
    set(option);
    if (option === "option1") {
      setDeliveryModalOpen(true);
    } else {
      setStorePickupModalOpen(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        marginBottom: 2,
        width: "fit-content",
        "@media (max-width: 600px)": {
          gap: 1,
          flexDirection: "column",
          width: "100%",
        },
      }}
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
          padding: "0.5rem 1rem",
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

      <DeliveryModal
        open={deliveryModalOpen}
        onClose={() => setDeliveryModalOpen(false)}
        dropdown1Value={dropdown1Value}
        setDropdown1Value={setDropdown1Value}
        dropdown2Value={dropdown2Value}
        setDropdown2Value={setDropdown2Value}
      />
      <PickupModal
        open={storePickupModalOpen}
        onClose={() => setStorePickupModalOpen(false)}
        dropdown1Value={dropdown1Value}
        setDropdown1Value={setDropdown1Value}
        dropdown2Value={dropdown2Value}
        setDropdown2Value={setDropdown2Value}
      />
    </Box>
  );
};

export default DeliveryTypeButtons;
