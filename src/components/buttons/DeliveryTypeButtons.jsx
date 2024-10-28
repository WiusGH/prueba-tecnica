import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  MenuItem,
  Select,
} from "@mui/material";
import selectedItemIcon from "../../assets/images/selected-item-icon.svg";
import unselectedItemIcon from "../../assets/images/unselected-item-icon.svg";
import movingTruckIcon from "../../assets/images/moving-truck-icon.svg";
import storeIcon from "../../assets/images/store-icon.svg";
import { useTheme } from "@mui/material/styles";

const DeliveryTypeButtons = ({ set, option1, option2 }) => {
  const [selected, setSelected] = useState(null);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const theme = useTheme();

  const handleSelect = (option) => {
    setSelected(option);
    set(option);
    if (option === "option1") {
      setOpenModal1(true);
      setOpenModal2(false);
    } else {
      setOpenModal2(true);
      setOpenModal1(false);
    }
  };

  const handleDropdown1Change = (event) => {
    setDropdown1Value(event.target.value);
    setDropdown2Value("");
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Value(event.target.value);
  };

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };
  const handleCloseModal2 = () => {
    setOpenModal2(false);
    setDropdown1Value("");
    setDropdown2Value("");
  };

  const dropdown1Options = ["Santiago", "Valparaíso", "Pucón"];
  const dropdown2Options =
    dropdown1Value === "Santiago"
      ? ["Santiago A", "Santiago B", "Santiago C"]
      : dropdown1Value === "Valparaíso"
      ? ["Valparaíso A", "Valparaíso B", "Valparaíso C"]
      : ["Pucón A", "Pucón B", "Pucón C"];

  const itemList =
    dropdown1Value && dropdown2Value
      ? [
          `Opcion basada en ${dropdown1Value} y ${dropdown2Value}`,
          `Otra opcion basada en ${dropdown1Value} y ${dropdown2Value}`,
          `Otra opcion basada en ${dropdown1Value} y ${dropdown2Value}`,
          `Otra opcion basada en ${dropdown1Value} y ${dropdown2Value}`,
        ]
      : [];

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
      {/* Modal para entrega a domicilio */}
      <Dialog
        open={openModal1}
        onClose={handleCloseModal1}
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
          <Box
            component={"img"}
            src={movingTruckIcon}
            alt="ícono de camión"
            sx={{ height: "26px", width: "26px" }}
          />
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
              onChange={handleDropdown1Change}
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
              onChange={handleDropdown2Change}
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
          <Button onClick={handleCloseModal1} color="black">
            Cancelar
          </Button>
          <Button onClick={handleCloseModal1}>Confirmar</Button>
        </DialogActions>
      </Dialog>

      {/* Modal para retiro en tienda */}
      <Dialog
        open={openModal2}
        onClose={handleCloseModal2}
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
          <Button onClick={handleCloseModal2} color="black" sx={{ padding: 0 }}>
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
          <Box
            component={"img"}
            src={storeIcon}
            sx={{ marginRight: "0.5rem", height: "26px", width: "26px" }}
          ></Box>{" "}
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
                onChange={handleDropdown1Change}
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
                onChange={handleDropdown2Change}
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
    </Box>
  );
};

export default DeliveryTypeButtons;
