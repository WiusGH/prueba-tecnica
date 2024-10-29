import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageViewerModal from "../modals/ImageViewerModal";

const ItemPhotosViewer = ({ mainImage, images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const extraImagesCount = images.length > 3 ? images.length - 3 : 0;

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ userSelect: "none" }}>
      {/* Imagen principal */}
      <Box
        component="img"
        src={mainImage}
        alt="main photo"
        sx={{
          width: "100%",
          height: "auto",
          mb: 2,
          cursor: "pointer",
        }}
        onClick={() => handleImageClick(mainImage, 0)}
      />

      {/* Imágenes adicionales en fila */}
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
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(image, index + 1)}
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
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(images[2], 2)}
            >
              <Typography variant="h3" color="text.dark">
                +{extraImagesCount}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      {/* Modal de imágenes */}
      <ImageViewerModal
        open={modalOpen}
        onClose={handleCloseModal}
        imageSrc={selectedImage}
        images={images}
        currentIndex={currentIndex}
        setSelectedImage={setSelectedImage}
      />
    </Box>
  );
};

export default ItemPhotosViewer;
