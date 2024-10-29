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

const PickupModal = ({
  open,
  onClose,
  dropdown1Value,
  setDropdown1Value,
  dropdown2Value,
  setDropdown2Value,
}) => {
  const itemList =
    dropdown1Value && dropdown2Value
      ? [
          `Opción basada en ${dropdown1Value} y ${dropdown2Value}`,
          `Otra opción basada en ${dropdown1Value} y ${dropdown2Value}`,
          `Otra opción basada en ${dropdown1Value} y ${dropdown2Value}`,
          `Otra opción basada en ${dropdown1Value} y ${dropdown2Value}`,
        ]
      : [];
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
          borderRadius: "18px",
          width: "70vw",
          maxWidth: "90%",
          "@media (max-width: 600px)": {
            height: "75vh",
            width: "90vw",
          },
        },
      }}
    >
      <DialogActions sx={{ padding: "1rem 0 0 0" }}>
        <Button onClick={onClose} color="black" sx={{ padding: 0 }}>
          X
        </Button>
      </DialogActions>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "auto",
          padding: "0 0 2rem",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "26px",
            fontWeight: "700",
            "@media (max-width: 600px)": {
              fontSize: "20px",
            },
          }}
        >
          Retiro en Tienda GRATIS
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
              "@media (max-width: 600px)": {
                flexDirection: "column",
                gap: 2,
              },
            }}
          >
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
          </Box>
          <Divider sx={{ margin: "2.5rem 0 1rem 0" }} />
          <Typography
            variant="body1"
            sx={{
              fontSize: "26px",
              fontWeight: "500",
              "@media (max-width: 600px)": { fontSize: "20px" },
            }}
          >
            Tiendas disponibles:
          </Typography>
          {itemList.length > 0 && (
            <Box>
              {itemList.map((item, index) => (
                <Typography key={index} variant="body1">
                  - {item}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PickupModal;
