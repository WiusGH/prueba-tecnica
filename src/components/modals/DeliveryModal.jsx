import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  Typography,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { regions } from "../data/regionsAndCommunes";

const DeliveryModal = ({
  open,
  onClose,
  dropdown1Value,
  setDropdown1Value,
  dropdown2Value,
  setDropdown2Value,
}) => {
  const theme = useTheme();

  const dropdown1Options = [
    "Metropolitana de Santiago",
    ...regions
      .map((region) => Object.keys(region)[0])
      .filter((region) => region !== "Metropolitana de Santiago")
      .sort(),
  ];

  const dropdown2Options = dropdown1Value
    ? Object.values(
        regions.find((region) => Object.keys(region)[0] === dropdown1Value) ||
          {}
      )[0]
    : [];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "18px",
          width: "50vw",
          maxWidth: "90%",
          "@media (max-width: 600px)": {
            width: "90vw",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          color: theme.palette.primary.main,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "20px", fontWeight: "700", marginLeft: "0.5rem" }}
        >
          Opciones de delivery
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          paddingBottom: 0,
          width: "70%",
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Select
            value={dropdown1Value}
            onChange={(e) => {
              setDropdown1Value(e.target.value);
              setDropdown2Value("");
            }}
            displayEmpty
            fullWidth
            sx={{
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "30px",
              height: "44px",
            }}
          >
            <MenuItem value="" disabled>
              SELECCIONA TU REGIÓN
            </MenuItem>
            {dropdown1Options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={dropdown2Value}
            onChange={(e) => setDropdown2Value(e.target.value)}
            displayEmpty
            fullWidth
            disabled={!dropdown1Value}
            sx={{
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "30px",
              height: "44px",
            }}
          >
            <MenuItem value="" disabled>
              SELECCIONA TU COMUNA
            </MenuItem>
            {dropdown2Options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <Box
            component="input"
            type="text"
            placeholder="Ingrese dirección"
            style={{
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "30px",
              height: "40px",
              padding: "0 12px",
              width: "100%",
              outline: "none",
              marginBottom: "16px",
              fontSize: "16px",
              transition: "border-color 0.3s",
            }}
          />
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={onClose} color="black">
          Cancelar
        </Button>
        <Button onClick={onClose}>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeliveryModal;
