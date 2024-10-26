import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomSearchBar = () => {
  // Variable para capturar lo que ingresa el usuario
  const [inputValue, setInputValue] = useState("");
  const theme = useTheme();
  // Variable para detectar el ancho de la pantalla
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Función para capturar lo que el usuario ingresa
  // Se puede modificar para enviar el correo a una API y registrarlo en la base de datos
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "50%",
      }}
    >
      <TextField
        placeholder="nombre@contacto.cl"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            borderRadius: "50px",
            height: "3rem",
            paddingRight: 0,
            "&.Mui-focused fieldset": { borderColor: "primary.main" },
          },
          "& input": {
            paddingLeft: "20px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "50px",
                  height: "3rem",
                  minWidth: isSmallScreen ? "8rem" : "14rem",
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                  },
                }}
                onClick={handleSubmit}
              >
                <Typography
                  variant="button"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Suscribirse
                </Typography>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default CustomSearchBar;
