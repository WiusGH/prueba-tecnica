import React, { useState } from "react";
import { Button, Menu, MenuItem, Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
        margin: "3rem 1rem",
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
          }}
        >
          <Typography variant="body2" sx={{ color: "primary.main" }}>
            {selectedText}
          </Typography>
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: `${width}px`,
              maxHeight: 200,
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
