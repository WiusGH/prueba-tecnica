import React from "react";
import style from "./layout.module.css";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomSearchBar from "../searchbars/CustomSearchBar";
import facebookIcon from "../../assets/images/facebook-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";
import locationIcon from "../../assets/images/location-icon.svg";
import messagesIcon from "../../assets/images/messages-icon.svg";
import FooterNavLinksList from "./FooterNavLinksList";

const puntosDeRetiro = [
  { icon: locationIcon, text: "Tienda Brand Santiago" },
  { icon: locationIcon, text: "Tienda Brand Viña del Mar" },
];

const servicioAlCliente = [
  { text: "Seguimiento de pedidos" },
  { text: "Cotización" },
  { text: "Centro de ayuda" },
  { text: "Preguntas frecuentes" },
  { text: "Cambios y devoluciones" },
  { text: "Información de reservas" },
  { text: "Información de despachos" },
];

const miCuenta = [
  { text: "Ingresa o regístrate" },
  { text: "Pedidos" },
  { text: "Descargas" },
  { text: "Direcciones" },
];

const sobreNostros = [
  { text: "Quiénes somos" },
  { text: "Tiendas" },
  { text: "Blog" },
];

const contactanos = [
  { icon: whatsappIcon, text: "+56 9 9999 9999" },
  { icon: messagesIcon, text: "¿Necesitas ayuda?" },
  { text: "Lunes a viernes 08:30 - 18:30" },
  { text: "Sábado de 10:00 - 14:00" },
  { text: "Domingo de 13:30 - 14:0" },
];

const redesSociales = [{ icon: [facebookIcon, whatsappIcon, instagramIcon] }];

const Footer = () => {
  const theme = useTheme();
  return (
    <Box component={"footer"} className={style.footer}>
      {/* Sección superior del footer */}
      <Box
        component={"section"}
        className={style.footerTop}
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Box
          sx={{
            textAlign: "left",
            "@media (max-width: 600px)": { textAlign: "center" },
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "2rem", fontWeight: "700" }}>
            Forma parte de Brand
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "500" }}>
            Suscríbete a nuestras ofertas y novedades.
          </Typography>
        </Box>
        <CustomSearchBar />
      </Box>
      {/* Sección inferior del footer */}
      <Box component={"section"} className={style.footerBottom}>
        <Box component={"nav"} className={style.footerNav}>
          <FooterNavLinksList title="Puntos de retiro" items={puntosDeRetiro} />
          <FooterNavLinksList
            title="Servicio al cliente"
            items={servicioAlCliente}
          />
          <FooterNavLinksList title="Mi cuenta" items={miCuenta} />
          <FooterNavLinksList title="Sobre nosotros" items={sobreNostros} />
          <Box>
            <FooterNavLinksList title="Contactanos" items={contactanos} />
            <FooterNavLinksList
              title="Síguenos en redes sociales"
              items={redesSociales}
            />
          </Box>
        </Box>
        <Box className={style.footerInfo}>
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Términos y condiciones
          </Typography>
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Brand © Todos los derechos reservados
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
