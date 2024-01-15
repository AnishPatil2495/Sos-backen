import { createTheme } from "@mui/material/styles";

export const themePalette = createTheme({
  palette: {
    primary: {
      main: "#002B5B",
    },
    secondary: {
      main: "#EA5455"
    },
    text: {
      primarywhite: "#F9F5EB",
      primarynavy: "#F9F5EB",
      secondary: "#E4DCCF",
      hoveroulined: "#002B5B"
    },
    button: {
      primary: "#002B5B",
      secondary: "#EA5455",
      border: "#F9F5EB",
      hoverborde: "#002B5B"
    }
  },
  shadows: {
    0: "none",
    1: "rgba(0, 0, 0, 0.09) 0mm 3mm 2mm",
    2: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
  }
})
