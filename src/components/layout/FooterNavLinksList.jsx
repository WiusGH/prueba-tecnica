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
    <Box sx={{ marginBottom: "2rem" }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          textDecoration: `underline 2px ${theme.palette.primary.main}`,
          marginTop: 2,
        }}
      >
        {title}
      </Typography>
      <List sx={{ padding: 0 }}>
        {items.map((item, index) => (
          <ListItem key={index} sx={{ padding: 0, margin: "1rem 0" }}>
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
              <ListItemText primary={item.text} sx={{ margin: 0 }} />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterNavLinksList;
