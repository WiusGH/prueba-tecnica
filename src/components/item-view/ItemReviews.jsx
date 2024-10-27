import { Box, Divider, Typography } from "@mui/material";
import starIcon from "../../assets/images/star-icon.svg";
import pencilSquareIcon from "../../assets/images/pencil-square-icon.svg";

const ItemReviews = ({ reviews, average }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "700", marginRight: "0.5rem" }}>
          {reviews}
        </span>{" "}
        valoraciones de clientes
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "0.7rem",
        }}
      >
        <Box component={"img"} src={starIcon} /> {average}
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", marginLeft: "3rem" }}
      >
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          <Box
            component={"img"}
            src={pencilSquareIcon}
            sx={{ marginRight: "0.7rem" }}
          />{" "}
          Escribir comentario
        </Typography>
        <Divider sx={{ border: "1px solid black", width: "100%" }} />
      </Box>
    </Box>
  );
};

export default ItemReviews;
