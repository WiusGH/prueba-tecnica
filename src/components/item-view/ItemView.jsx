import React from "react";
import { Box } from "@mui/material";
import style from "./item-view.module.css";
import wheyProtein100 from "../../assets/images/whey-protein-100.svg";
import ItemPhotosViewer from "./ItemPhotosViewer";

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

const ItemView = () => {
  return (
    <Box component={"main"} className={style.container}>
      <Box component={"section"} className={style.itemViewer}>
        <ItemPhotosViewer
          mainImage={images.mainImage}
          images={images.restOfImages}
        />
        <Box className={style.itemDescription}></Box>
      </Box>
    </Box>
  );
};

export default ItemView;
