import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
export const StyledContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  padding: " 25px 20px",
  background:
    "url(/static/media/icon-bg.13b9fb0….svg) center center / cover no-repeat rgb(3, 7, 18)",
  overflowY: "auto",
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "5px !important",
  },
  "&::-webkit-scrollbar": {
    width: "4px !important",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent !important",
  },
  "&:hover": {
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(217deg, #e250e5, #4b50e6) !important",
    },
  },

  [theme.breakpoints.down("sm")]: {
    padding: "16px",
  },
}));

export const BoxContent = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  margin: "auto",
  ".ic-menu": {
    width: "26px",
    height: "26px",
    display: "none !important",
    color: "var(--text-color, #fff)",
  },

  [theme.breakpoints.down("sm")]: {
    ".ic-menu": {
      display: "block !important",
    },
  },
}));

export const HeaderPage = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
