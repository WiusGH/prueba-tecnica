import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import carouselArrowLeft from "../../assets/images/carousel-arrow-left.svg";
import carouselArrowRight from "../../assets/images/carousel-arrow-right.svg";
import DiscountTag from "../buttons/DiscountTag";

/**
 * Componente que recibe un objeto con los items a mostrar.
 *
 * @param {Object[]} items - Lista de items a mostrar.
 * @param {string} items[].image - Imagen del item.
 * @param {string} items[].title - Título del item.
 * @param {string} items[].description - Descripción del item.
 * @param {number} items[].price - El precio del item.
 * @param {number} [items[].discount] - El porcentaje de descuento.
 * @param {boolean} [items[].freeShipping] - Si el item tiene envío gratis(opcional).
 */
const CustomCarousel = ({ items }) => {
  const formatPrice = (price) => {
    const roundedPrice = Math.floor(price);
    return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box
        component="img"
        src={carouselArrowRight}
        alt="next arrow"
        className={className}
        onClick={onClick}
        sx={{
          ...style,
          display: "block",
          height: "40px",
          width: "40px",
          right: "-7%",
          "&:hover": { opacity: 0.8 },
          "@media (max-width: 960px)": { right: "-16%" },
        }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box
        component="img"
        src={carouselArrowLeft}
        alt="prev arrow"
        className={className}
        onClick={onClick}
        sx={{
          ...style,
          display: "block",
          height: "40px",
          width: "40px",
          left: "-7%",
          "&:hover": { opacity: 0.8 },
          "@media (max-width: 960px)": { left: "-16%" },
        }}
      />
    );
  }

  return (
    <Box sx={{ width: "90%", margin: "0 auto", p: 4 }}>
      <Slider {...settings} sx={{ width: "100%" }}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              overflow: "hidden",
              padding: 3,
              margin: "0 7rem",
              textAlign: "left",
              position: "relative",
              "@media (max-width: 960px)": { margin: 0 },
            }}
          >
            {item.discount && (
              <Box sx={{ position: "absolute", top: 30, left: 30 }}>
                <DiscountTag discount={item.discount} />
              </Box>
            )}
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{ width: "100%", height: "60%", objectFit: "cover" }}
            />
            <Typography variant="body2" sx={{ margin: "1rem 0 0 1rem" }}>
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", marginLeft: "1rem" }}
            >
              {item.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: "0.5rem 0 0.5rem 1rem",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "primary.main", fontWeight: "bold", mr: 2 }}
              >
                ${formatPrice(item.price - item.price * (item.discount / 100))}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ textDecoration: "line-through" }}
              >
                ${item.price}
              </Typography>
            </Box>
            {item.freeShipping && (
              <Box
                variant="body2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00FFF033",
                  color: "#07706A",
                  padding: "0.2rem 1rem",
                  height: "fit-content",
                  width: "fit-content",
                }}
              >
                <Typography variant="body2" sx={{ fontSize: "0.6rem" }}>
                  ENVÍO GRATIS STGO
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomCarousel;
