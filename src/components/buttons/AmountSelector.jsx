import { Box } from "@mui/material";
import React, { useState } from "react";

const AmountSelector = ({ width }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: width,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9D9D9",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "black",
          padding: "5px 10px",
          "&:hover": {
            opacity: 0.8,
          },
          "&:active": {
            opacity: 0.5,
          },
          userSelect: "none",
        }}
        onClick={decrementCount}
      >
        -
      </Box>
      <Box
        readOnly
        sx={{
          backgroundColor: "#D9D9D92B",
          borderRadius: "8px",
          fontSize: "1rem",
          textAlign: "center",
          padding: "5px 10px",
          width: "70%",
        }}
      >
        {count}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9D9D9",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "black",
          padding: "5px 10px",
          "&:hover": {
            opacity: 0.8,
          },
          "&:active": {
            opacity: 0.5,
          },
          userSelect: "none",
        }}
        onClick={incrementCount}
      >
        +
      </Box>
    </Box>
  );
};

export default AmountSelector;
