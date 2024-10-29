import React, { useEffect, useState } from "react";
import axiosInstance from "../../components/utils/axios";
import { Box, Divider, Typography } from "@mui/material";
import style from "./item-view.module.css";
import wheyProtein100 from "../../assets/images/whey-protein-100.svg";
import ItemPhotosViewer from "./ItemPhotosViewer";
import shakerBottles from "../../assets/images/shaker-bottles.svg";
import DeliveryTypeButtons from "../buttons/DeliveryTypeButtons";
import SimilarItems from "./SimilarItems";
import PriceTag from "./PriceTag";
import FreeShippingTag from "./FreeShippingTag";
import ItemOptionsDropdown from "./ItemOptionsDropdown";
import ItemQuantitySelector from "./ItemQuantitySelector";
import ItemReviews from "./ItemReviews";

// Constante para simular un objeto obtenido de la base de datos
const item = {
  brand: "Brand",
  name: "Whey Protein - Original",
  price: 71990,
  discount: 5,
  freeShipping: true,
  sku: "1588023425509",
  description:
    "Exclusiva fórmula proteica a base de suero de leche aislado e hidrolizado que ha sido científicamente diseñada para construir músculo magro libre de grasa, aumentar la fuerza y mejorar el rendimiento deportivo. Cada porción contiene 0g de proteína y una matriz de aminoácidos de cadena ramificada, glutamina y creatina para acelerar el aumento de músculo y la fuerza.",
  optionType: "Sabor",
  optionsList: [],
  images: {
    mainImage: wheyProtein100,
    restOfImages: [
      wheyProtein100,
      wheyProtein100,
      wheyProtein100,
      wheyProtein100,
      shakerBottles, // Agregado solo para mostrar que las flechas del modal funcionan
    ],
  },
  reviews: 12,
  average: 4.8,
};

// Constante para simular un array de objetos obtenidos de la base de datos
const carouselItems = [
  {
    image: shakerBottles,
    title: "Brand 1",
    description: "Shaker Brand 1 400cc",
    discount: 15,
    price: 9990,
  },
  {
    image: shakerBottles,
    title: "Brand 2",
    description: "Shaker Brand 2 400cc",
    discount: 5,
    price: 9990,
    freeShipping: true,
  },
  {
    image: shakerBottles,
    title: "Brand 3",
    description: "Shaker Brand 3 400cc",
    discount: 10,
    price: 9990,
    freeShipping: true,
  },
  {
    image: shakerBottles,
    title: "Brand 4",
    description: "Shaker Brand 4 400cc",
    discount: 25,
    price: 9990,
  },
  {
    image: shakerBottles,
    title: "Brand 5",
    description: "Shaker Brand 5 400cc",
    discount: 8,
    price: 9990,
    freeShipping: true,
  },
];

const ItemView = () => {
  // Variable para asignar la lista de opciones al objeto "item"
  const [optionsList, setOptionsList] = useState([]);
  // Variable booleana para controlar el estado de la carga
  const [loading, setLoading] = useState(true);

  // Función para obtener la lista de opciones de la base de datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/sabores");
        const fetchedOptions = response.data.sabores.map((sabor) => sabor.name);
        setOptionsList(fetchedOptions);
      } catch (error) {
        console.error("Error al obtener lista de opciones:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Box component={"main"} className={style.container}>
      <Box component={"section"} className={style.itemViewer}>
        {/* Sección izquierda */}
        <Box
          className={`${style.flex} ${style.column} ${style.spaceBetween}`}
          sx={{ height: "100%" }}
        >
          <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
            INICIO / PROTEÍNAS / WHEY PROTEIN
          </Typography>
          <ItemPhotosViewer
            mainImage={item.images.mainImage}
            images={item.images.restOfImages}
          />
        </Box>
        {/* Sección derecha */}
        <Box
          component={"section"}
          className={`${style.flex} ${style.column} ${style.spaceBetween}`}
          sx={{ height: "100%", gap: 1 }}
        >
          <Typography variant="body2">{item.brand}</Typography>
          {/* Se utiliza H1 para que el S.E.O. sepa que es el nombre del producto */}
          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "600" }}>
            {item.name}
          </Typography>

          <PriceTag price={item.price} discount={item.discount} />
          {item.freeShipping && <FreeShippingTag />}

          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              margin: "0.8rem 0.5rem",
            }}
          >
            SKU {item.sku}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              backgroundColor: "#F5F4F4",
              padding: "3%",
            }}
          >
            {item.description}
          </Typography>

          {!loading ? (
            <ItemOptionsDropdown
              optionType={item.optionType}
              optionsList={optionsList}
            />
          ) : (
            <Typography variant="body2" sx={{ margin: "1rem 0" }}>
              Cargando opciones...
            </Typography>
          )}

          <ItemQuantitySelector />

          <Typography variant="body1">Tipo de entrega:</Typography>

          <DeliveryTypeButtons
            option1={"Despacho a domicilio"}
            option2={"Retiro en tienda GRATIS"}
            set={() => {}}
          />

          <ItemReviews reviews={item.reviews} average={item.average} />
        </Box>
      </Box>
      {/* Sección inferior */}
      <Divider sx={{ border: "1px solid black", width: "100%" }} />
      <SimilarItems carouselItems={carouselItems} />
    </Box>
  );
};

export default ItemView;
