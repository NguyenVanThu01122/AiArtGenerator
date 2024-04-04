import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// export default extendTheme;
export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#556cd6",
        },
        common: {
          background: "rgb(33, 43, 54)", // "rgba(97, 243, 245, 0.2);
          // black: "rgb(9, 9, 23)",
        },
        background: {
          default: "rgb(244, 246, 248)",
          paper: "#ffff",
        },
        info: {
          main: "rgb(200, 249, 249)",
        },
        text: {
          primary: "rgb(9, 9, 23)",
          secondary: "#ffff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#19857b",
        },
        common: {
          background: "#1a202f",
          white: "#ffff",
        },
        background: {
          // default: "#1c1c2c",
          default: "rgb(9, 9, 23)",
          paper: "#1a202f",
        },
        text: {
          primary: "#ffff",
          secondary: "#ffff",
        },
        info: {
          main: "#1a202f",
        },
      },
    },
  },
});

// Create a theme instance.
// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#556cd6",
//     },
//     secondary: {
//       main: "#19857b",
//     },
//     error: {
//       main: red.A400,
//     },
//     text: {
//       secondary: orange[500],
//     },
//   },
// });
