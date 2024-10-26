import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ItemPhotosViewer = ({ mainImage, images }) => {
  const extraImagesCount = images.length > 3 ? images.length - 3 : 0;

  return (
    <Box>
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

      {/* Additional Images */}
      <Grid container spacing={1}>
        {images.slice(0, 2).map((image, index) => (
          <Grid item xs={4} key={index}>
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
          <Grid item xs={4}>
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
