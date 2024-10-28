import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import useTheme from "@mui/material/styles/useTheme";

const FooterNavLinksList = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginBottom: "2rem",
        "@media (max-width: 600px)": { marginBottom: 0 },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: "700",
          textAlign: "left",
          textDecoration: `underline 2px ${theme.palette.primary.main}`,
          marginTop: 1,
        }}
      >
        {title}
      </Typography>
      <List sx={{ padding: 0 }}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              cursor: "pointer",
              padding: 0,
              margin: "0.5rem 0",
            }}
          >
            {item.icon && (
              <ListItemIcon sx={{ display: "flex", minWidth: 0 }}>
                {Array.isArray(item.icon) ? (
                  item.icon.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt={`icon ${index}`}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                    />
                  ))
                ) : (
                  <img
                    src={item.icon}
                    alt={`${item.text} icon`}
                    style={{
                      marginRight: "10px",
                      height: "20px",
                      width: "20px",
                    }}
                  />
                )}
              </ListItemIcon>
            )}

            {item.text && (
              <ListItemText
                primary={item.text}
                sx={{
                  fontWeight: "500",
                  margin: 0,
                  "&:hover": { textDecoration: "underline" },
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterNavLinksList;
