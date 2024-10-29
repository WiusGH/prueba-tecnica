import React, { useState } from "react";
import style from "./layout.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, Typography, Drawer, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import userLogo from "../../assets/images/user-icon.svg";
import TruckLogo from "../../assets/images/truck-icon.svg";
import ShoppingBagLogo from "../../assets/images/shopping-bag-icon.svg";
import magnifyingGlass from "../../assets/images/mag-glass-icon.svg";
import shoppingCart from "../../assets/images/shopping-cart-icon.svg";
import logo from "../../assets/images/logo192.png";

const Header = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const mobileNavItems = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <Box
        className={`${style.flex} ${style.center}}`}
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: "1rem",
          width: "100%",
        }}
      >
        <Box
          component={"img"}
          src={logo}
          alt="user logo"
          sx={{ cursor: "pointer", width: "30px", "&:hover": { scale: "1.2" } }}
        />
        <Typography
          variant="h6"
          sx={{ color: "white", fontWeight: "700", margin: "auto 0 auto 1rem" }}
        >
          BRAND
        </Typography>
      </Box>
      <Divider />

      <Box
        className={style.drawer}
        sx={{
          padding: "1rem",
        }}
      >
        <Typography
          variant="body1"
          sx={{ "&:hover": { cursor: "pointer", textDecoration: "underline" } }}
        >
          SHOP ALL
        </Typography>
        <Typography variant="body1">BEST SELLER</Typography>
        <Typography variant="body1">PROTEÍNAS</Typography>
        <Typography variant="body1">SUPLEMENTOS</Typography>
        <Typography variant="body1">PRE ENTRENOS</Typography>
        <Typography variant="body1">ACCESORIOS</Typography>
        <Typography variant="body1">BARRAS Y SNACKS</Typography>
      </Box>
      <Divider />
      <Box
        className={`${style.flex} ${style.column}`}
        sx={{
          backgroundColor: theme.palette.tertiary.main,
          color: "white",
          gap: "0.8rem",
          padding: "1rem",
        }}
      >
        <Box className={style.flex} sx={{ gap: "1rem" }}>
          <Box
            component={"img"}
            src={userLogo}
            alt="user logo"
            sx={{ width: "20px" }}
          />
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
                scale: "1.2",
              },
            }}
          >
            Iniciar sesión
          </Typography>
        </Box>

        <Box className={style.flex} sx={{ gap: "1rem" }}>
          <Box component={"img"} src={TruckLogo} alt="truck logo" />
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
                scale: "1.2",
              },
            }}
          >
            Seguimiento
          </Typography>
        </Box>

        <Box className={style.flex} sx={{ gap: "1rem" }}>
          <Box
            component={"img"}
            src={ShoppingBagLogo}
            alt="shopping bag logo"
          />
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
                scale: "1.2",
              },
            }}
          >
            Tiendas
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box component={"header"} className={style.header}>
      {/* Sección superior del header */}
      <Box
        component={"nav"}
        className={style.navTop}
        sx={{ backgroundColor: theme.palette.tertiary.main }}
      >
        <Box>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {!isMobile && <Box className={style.flex1}></Box>}

        <Typography variant="body2" className={style.flex1}>
          15% OFF EN TODO CON EL CÓDIGO: XX15OFF
        </Typography>
        {!isMobile && (
          <Box
            className={`${style.flex} ${style.flex1} ${style.flexEnd}`}
            sx={{ gap: 2 }}
          >
            <Box component={"img"} src={userLogo} alt="user logo" />
            <Typography variant="body2">Iniciar sesión</Typography>
            <Divider orientation="vertical" sx={{ borderColor: "white" }} />
            <Box component={"img"} src={TruckLogo} alt="truck logo" />
            <Typography variant="body2">Seguimiento</Typography>
            <Divider orientation="vertical" sx={{ borderColor: "white" }} />
            <Box
              component={"img"}
              src={ShoppingBagLogo}
              alt="shopping bag logo"
            />
            <Typography variant="body2">Tiendas</Typography>
          </Box>
        )}
      </Box>
      {/* Sección inferior del header */}
      <Box
        component={"header"}
        className={`${style.navBottom}`}
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Box className={style.flex1}></Box>
        <Typography
          variant="h3"
          className={`${style.flex1}`}
          sx={{
            color: theme.palette.text.light,
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          BRAND
        </Typography>
        {isMobile && (
          <Box
            className={`${style.flex} ${style.flex1} ${style.flexEnd} ${style.center}`}
          >
            <Box
              component={"img"}
              src={magnifyingGlass}
              alt="magnifying glass icon"
              sx={{
                cursor: "pointer",
                marginRight: "0.5rem",
                "&:hover": { scale: "1.2" },
              }}
            />
            <Box
              component={"img"}
              src={shoppingCart}
              alt="shopping cart icon"
              sx={{ cursor: "pointer", "&:hover": { scale: "1.2" } }}
            />
          </Box>
        )}
        {isMobile ? null : (
          <Box
            className={`${style.flex} ${style.center}`}
            component="nav"
            sx={{ width: "100%" }}
          >
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
                component="img"
                src={magnifyingGlass}
                alt="magnifying glass"
                sx={{ "&:hover": { cursor: "pointer", scale: "1.2" } }}
              />
              <Box
                component="img"
                src={shoppingCart}
                alt="shopping cart"
                sx={{ "&:hover": { cursor: "pointer", scale: "1.2" } }}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {mobileNavItems}
      </Drawer>
    </Box>
  );
};

export default Header;
