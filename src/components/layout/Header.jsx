import React from "react";
import style from "./layout.module.css";
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import userLogo from "../../assets/images/user-icon.svg";
import TruckLogo from "../../assets/images/truck-icon.svg";
import ShoppingBagLogo from "../../assets/images/shopping-bag-icon.svg";
import magnifyingGlass from "../../assets/images/mag-glass-icon.svg";
import shoppingCart from "../../assets/images/shopping-cart-icon.svg";

const Header = () => {
  const theme = useTheme();
  return (
    <Box component={"header"} className={style.header}>
      {/* Sección superior del header */}
      <Box
        component={"nav"}
        className={style.navTop}
        sx={{ backgroundColor: theme.palette.tertiary.main }}
      >
        <Box className={style.flex1}></Box>
        <Typography variant="body2" className={style.flex1}>
          15% OFF EN TODO CON EL CÓDIGO: XX15OFF
        </Typography>
        <Box
          className={`${style.flex} ${style.flex1} ${style.flexEnd}`}
          sx={{ gap: 2 }}
        >
          <Box component={"img"} src={userLogo} alt="user logo" />
          <Typography variant="body2">Iniciar sesión</Typography>
          <Divider
            orientation="vertical"
            sx={{
              border: "1px solid white",
              height: "1.5rem",
            }}
          />
          <Box component={"img"} src={TruckLogo} alt="truck logo" />
          <Typography variant="body2">Seguimiento</Typography>
          <Divider
            orientation="vertical"
            sx={{
              border: "1px solid white",
              height: "1.5rem",
            }}
          />
          <Box
            component={"img"}
            src={ShoppingBagLogo}
            alt="shopping bag logo"
          />
          <Typography variant="body2">Tiendas</Typography>
        </Box>
      </Box>
      {/* Sección inferior del header */}
      <Box
        component={"header"}
        className={style.navBottom}
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Typography
          variant="h3"
          sx={{ color: theme.palette.text.light, fontWeight: "bold" }}
        >
          BRAND
        </Typography>

        <Box
          className={`${style.flex} ${style.center}`}
          component={"nav"}
          sx={{ width: "100%" }}
        >
          {/* Center-aligned Typography components */}
          <Box
            className={`${style.flexGrow1} ${style.flex} ${style.center}`}
            sx={{ gap: 2 }}
          >
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.light }}
            >
              SHOP ALL
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.light }}
            >
              BEST SELLER
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.light }}
            >
              PROTEÍNAS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.light }}
            >
              SUPLEMENTOS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.light }}
            >
              PRE ENTRENOS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.light }}
            >
              ACCESORIOS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.light }}
            >
              BARRAS Y SNACKS
            </Typography>
          </Box>
          <Box className={style.flex} gap={2}>
            <Box
              component={"img"}
              src={magnifyingGlass}
              alt="magnifying glass"
            />
            <Box component={"img"} src={shoppingCart} alt="shopping cart" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
