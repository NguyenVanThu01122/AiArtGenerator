import { Box, Grid, styled } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  padding: "0px 0px",

  [theme.breakpoints.down("sm")]: {
    padding: "0px",
    width: "40%",
    button: {
      padding: "0px",
      height: "32px",
      flex: 1,
      fontSize: "12px",
      fontWeight: 600,
    },
  },
}));

export const BoxLogo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none !important",
  },
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    button: {
      display: "none",
    },
  },
}));
