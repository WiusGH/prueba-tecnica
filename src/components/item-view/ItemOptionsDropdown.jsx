import { Box, Typography } from "@mui/material";
import React from "react";
import CustomDropdown from "../dropdown/CustomDropdown";

const ItemOptionsDropdown = ({ optionType, optionsList }) => {
  return (
    <Box>
      <Typography variant="body1">{optionType}:</Typography>
      <CustomDropdown
        defaultText={`Escoger ${optionType}`}
        items={optionsList}
        width={"40%"}
      />
    </Box>
  );
};

export default ItemOptionsDropdown;
