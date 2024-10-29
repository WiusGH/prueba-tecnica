import React from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Importing left arrow icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Importing right arrow icon

const ImageViewerModal = ({
  open,
  onClose,
  images,
  imageSrc,
  currentIndex,
  setSelectedImage,
}) => {
  // Function to go to the previous image
  const handlePrevious = () => {
    // Loop back to the last image if we're at the first image
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex -= 1;
    }
    setSelectedImage(images[currentIndex]); // Set the selected image based on new index
  };

  // Function to go to the next image
  const handleNext = () => {
    // Loop back to the first image if we're at the last image
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    setSelectedImage(images[currentIndex]); // Set the selected image based on new index
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: "20%",
            top: "5%",
            color: "white",
            "@media (max-width: 960px)": {
              right: "4%",
              top: "22%",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Previous image button */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Next image button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          <ArrowForwardIcon />
        </IconButton>

        <img
          src={imageSrc}
          alt="Enlarged"
          style={{ maxWidth: "90%", maxHeight: "90%" }}
        />
      </Box>
    </Modal>
  );
};

export default ImageViewerModal;
