import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomCarousel from "../carousels/CustomCarousel";

const SimilarItems = ({ carouselItems }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: "600",
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        TE PODRÍA INTERESAR TAMBIÉN
      </Typography>
      <CustomCarousel items={carouselItems} />
    </Box>
  );
};

export default SimilarItems;
