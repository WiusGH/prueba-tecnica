import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

const ItemPhotosViewer = ({ mainImage, images }) => {
  const extraImagesCount = images.length > 3 ? images.length - 3 : 0;

  return (
    <Box>
      {/* Main Image */}
      <Box
        component="img"
        src={mainImage}
        alt="main photo"
        sx={{
          width: "100%",
          height: "auto",
          mb: 2,
        }}
      />

      {/* Additional Images in a Row */}
      <Grid container sx={{ justifyContent: "space-between" }}>
        {images.slice(0, 2).map((image, index) => (
          <Grid item xs={4} key={index} sx={{ width: "30%" }}>
            <Box
              component="img"
              src={image}
              alt={`foto adicional ${index + 1}`}
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
        ))}
        {extraImagesCount > 0 && (
          <Grid item xs={4} sx={{ width: "30%" }}>
            <Box
              sx={{
                width: "100%",
                height: "96%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${images[2]})`,
                backgroundSize: "cover",
                opacity: 0.5,
              }}
            >
              <Typography variant="h3" color="text.dark">
                +{extraImagesCount}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ItemPhotosViewer;
