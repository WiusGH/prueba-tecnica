import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import style from "./item-view.module.css";
import wheyProtein100 from "../../assets/images/whey-protein-100.svg";
import ItemPhotosViewer from "./ItemPhotosViewer";
import DiscountTag from "../buttons/DiscountTag";
import { useTheme } from "@mui/material/styles";
import starIcon from "../../assets/images/star-icon.svg";
import pencilSquareIcon from "../../assets/images/pencil-square-icon.svg";
import shakerBottles from "../../assets/images/shaker-bottles.svg";
import CustomCarousel from "../carousels/CustomCarousel";
import CustomDropdown from "../dropdown/CustomDropdown";
import AddToCartButton from "../buttons/AddToCartButton";
import AmountSelector from "../buttons/AmountSelector";
import DeliveryTypeButtons from "../buttons/DeliveryTypeButtons";
import movingTruckIcon from "../../assets/images/moving-truck-icon.svg";
import storeIcon from "../../assets/images/store-icon.svg";

const images = {
  mainImage: wheyProtein100,
  restOfImages: [
    wheyProtein100,
    wheyProtein100,
    wheyProtein100,
    wheyProtein100,
    wheyProtein100,
  ],
};

const carouselItems = [
  {
    image: shakerBottles,
    title: "Brand 1",
    description: "Shaker Brand 1 400cc",
    discountedPrice: "7.990",
    originalPrice: "9.990",
  },
  {
    image: shakerBottles,
    title: "Brand 2",
    description: "Shaker Brand 2 400cc",
    discountedPrice: "7.990",
    originalPrice: "9.990",
    freeShipping: true,
  },
  {
    image: shakerBottles,
    title: "Brand 3",
    description: "Shaker Brand 3 400cc",
    discountedPrice: "7.990",
    originalPrice: "9.990",
    freeShipping: true,
  },
  {
    image: shakerBottles,
    title: "Brand 4",
    description: "Shaker Brand 4 400cc",
    discountedPrice: "7.990",
    originalPrice: "9.990",
  },
  {
    image: shakerBottles,
    title: "Brand 5",
    description: "Shaker Brand 5 400cc",
    discountedPrice: "7.990",
    originalPrice: "9.990",
    freeShipping: true,
  },
];

// TODO: Reemplazar esta lista hardcodeada por una llamada a la API
const sabores = ["Sabor 1", "Sabor 2", "Sabor 3", "Sabor 4", "Sabor 5"];

const ItemView = () => {
  const theme = useTheme();
  return (
    <Box component={"main"} className={style.container}>
      <Box component={"section"} className={style.itemViewer}>
        <Box>
          <Typography variant="body1" sx={{ marginBottom: "2.5rem" }}>
            INICIO / PROTEÍNAS / WHEY PROTEIN
          </Typography>
          <ItemPhotosViewer
            mainImage={images.mainImage}
            images={images.restOfImages}
          />
        </Box>
        <Box className={style.itemDescription}>
          <Typography variant="body2" sx={{ marginBottom: "2.5rem" }}>
            Brand
          </Typography>
          <Box sx={{ margin: "2.5rem 0" }}>
            <Typography variant="h4">Whey Protein - Original</Typography>
            <Box className={style.flex} sx={{ gap: 1 }}>
              <DiscountTag discount="20" />
              <Typography
                variant="h5"
                sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
              >
                $68.390
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: "bold",
                  marginLeft: "1rem",
                  textDecoration: "line-through",
                }}
              >
                $71.999
              </Typography>
            </Box>
            <Box
              className={`${style.flex} ${style.Center}`}
              variant="body2"
              sx={{
                backgroundColor: "#00FFF033",
                border: "1px solid #07706A",
                color: "#07706A",
                padding: "2px",
                height: "fit-content",
                margin: "1rem 0",
                width: "fit-content",
              }}
            >
              <Typography variant="body2">ENVÍO GRATIS STGO</Typography>
            </Box>
            <Typography variant="body2" sx={{ margin: "1rem 0" }}>
              SKU 1588023425509
            </Typography>
            <Typography
              variant="body1"
              sx={{ backgroundColor: "#F5F4F4", padding: "3%" }}
            >
              Exclusiva fórmula proteica a base de suero de leche aislado e
              hidrolizado que ha sido cientificamente diseñada para construir
              músculo magro libre de grasa, aumentar la fuerza y mejorar el
              rendimiento deportivo.Cada porción contiene 30 g de proteína y una
              matriz de aminoácidos de cadena ramificada, glutamina y creatina
              para acelarar el aumento de músculo y la fuerza.
            </Typography>
            <Typography variant="body1" sx={{ margin: "1rem 0" }}>
              Sabor:
            </Typography>
            <CustomDropdown
              defaultText="Escoger Sabor"
              items={sabores}
              width={"40%"}
            />
            <Box className={style.flex} sx={{ gap: 2 }}>
              <AmountSelector width={"40%"} />
              <AddToCartButton
                color="main"
                text="Agregar al carrito"
                width={"60%"}
                onClick={() => {}}
              />
            </Box>
            <Typography variant="body1" sx={{ margin: "1.5rem 0" }}>
              Tipo de entrega:
            </Typography>
            <DeliveryTypeButtons
              option1Icon={movingTruckIcon}
              option1Text={"Despacho a domicilio"}
              option2Icon={storeIcon}
              option2Text={"Retiro en tienda GRATIS"}
              set={() => {}}
              width={"80%"}
            />
            <Box className={`${style.flex} ${style.Center}`}>
              <Typography
                className={`${style.flex} ${style.Center}`}
                variant="body1"
              >
                12 valoraciones de clientes
              </Typography>
              <Typography
                className={`${style.flex} ${style.Center}`}
                variant="body1"
                sx={{ margin: "0 3rem 0 1rem" }}
              >
                <Box component={"img"} src={starIcon} /> 4.8
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  className={`${style.flex} ${style.Center}`}
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                >
                  <Box
                    component={"img"}
                    src={pencilSquareIcon}
                    sx={{ marginRight: "1rem" }}
                  />{" "}
                  Escribir comentario
                </Typography>
                <Divider sx={{ border: "1px solid black", width: "100%" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ border: "1px solid black", width: "100%" }} />
      <Box
        className={`${style.flex} ${style.column} ${style.Center}`}
        sx={{ width: "100%" }}
      >
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          TE PODRÍA INTERESAR TAMBIÉN
        </Typography>
        <CustomCarousel items={carouselItems} />
      </Box>
    </Box>
  );
};

export default ItemView;
