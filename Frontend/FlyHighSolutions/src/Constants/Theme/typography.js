import { createTheme } from "@mui/material/styles";
import { themePalette } from "./colors";

export const themeTypography = createTheme(themePalette, {
  typography: {
    h1: {
      fontFamily: '"Proxima Nova",sans-serif',
      fontSize: "40px",
      lineHeight: "50px",
    },
    h2: {
      fontFamily: '"Proxima Nova",sans-serif',
      fontSize: "36px",
      lineHeight: "46px",
    },
    h3: {
      fontFamily: '"Proxima Nova",sans-serif',
      fontSize: "30px",
      lineHeight: "40px",
    },
    h4: {
      fontFamily: '"Proxima Nova",sans-serif',
      fontSize: "24px",
      lineHeight: "34px",
      fontWeight: "700"
    },
    h5: {
      fontFamily: '"Proxima Nova",sans-serif',
      fontSize: "20px",
      lineHeight: "30px",
    },
    h6: {
      fontFamily: '"Proxima Nova",sans-serif',
      fontSize: "18px",
      lineHeight: "28px",
    },
    subtitle1: {
      fontFamily: '"Proxima Nova",sans-serif',
      fontSize: "16px",
      lineHeight: "26px",
    },
    subtitle2: {
      fontFamily: '"Proxima Nova",sans-serif',
      fontSize: "12px",
      lineHeight: "22px",
    },
  }
})