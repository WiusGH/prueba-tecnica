import React, { useState } from "react";
import { Button, Menu, MenuItem, Box, Paper, Typography } from "@mui/material";
import arrowDown from "../../assets/images/arrow-down.svg";
import arrowUp from "../../assets/images/arrow-up.svg";
import { useTheme } from "@mui/material/styles";

/**
 * Componente para mostrar un dropdown personalizado.
 *
 * @param {{ width: number, defaultText: string, items: string[] }} props
 * @returns {JSX.Element}
 *
 * Props:
 * - width: Ancho del dropdown. (default: 200)
 * - defaultText: Texto por defecto. (default: 'Select')
 * - items: Arreglo de strings con las opciones del dropdown.
 */
const CustomDropdown = ({
  width = 200,
  defaultText = "Select",
  items = [],
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedText, setSelectedText] = useState(defaultText);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (text) => {
    setSelectedText(text);
    handleClose();
  };

  return (
    <Paper
      elevation={2}
      sx={{
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: "8px",
        margin: "2rem 1rem",
        padding: "0.3rem 0",
        width: `${width}`,
      }}
    >
      <Box>
        <Button
          onClick={handleClick}
          variant="filled"
          sx={{
            width: "100%",
            textAlign: "left",
            justifyContent: "flex-start",
            textTransform: "none",
          }}
        >
          <Box
            sx={{
              color: "primary.main",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography variant="body2">{selectedText}</Typography>
            <Typography variant="body2">
              {anchorEl ? (
                <img src={arrowUp} alt="arrow up" />
              ) : (
                <img src={arrowDown} alt="arrow down" />
              )}
            </Typography>
          </Box>
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: anchorEl ? anchorEl.clientWidth : `${width}px`,
              marginTop: "12px",
              maxHeight: 250,
              overflow: "auto",
            },
          }}
        >
          {items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleSelect(item)}
              sx={{ padding: "8px 16px" }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Paper>
  );
};

export default CustomDropdown;
