import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

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

// export default extendTheme;
export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ffff",
        },
        common: {
          black: "rgb(9, 9, 23)",
          white: "#ffff",
        },
      },
    },
    dark: {
      palette: {
        // primary: {
        //   main: "#rgb(9, 9, 23)",
        // },
      },
    },
  },
});
