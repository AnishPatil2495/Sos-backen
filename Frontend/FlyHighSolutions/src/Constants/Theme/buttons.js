import { createTheme } from "@mui/material/styles";
import { themePalette } from "./colors";

export const themeButtons = createTheme(themePalette, {
  components: {
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          padding: "10px 10px",
          fontFamily: '"Proxima Nova",sans-serif',
          lineHeight: "20px",
          fontSize: "15px",
          maxWidth: "250px",
          width: "fit-content",
          height: "50px",
          textTransform: "none",
          borderRadius: 0,
        }
      },
      variants: [
        {
          props: { variant: "contained", color: themePalette.palette.secondary.main },
          style: {
            backgroundColor: themePalette.palette.primary.main,
            "&:hover": {
              backgroundColor: themePalette.palette.primary.main,
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
            "&:focus": {
              backgroundColor: themePalette.palette.primary.main,
            },
            "&:disabled": {
              backgroundColor: "#1F1F1F1F",
            },
            "&:active": {
              backgroundColor: themePalette.palette.primary.main,
              boxShadow: "unset",
            },
          },
        },
        {
          props: { variant: "nofill", color: themePalette.palette.primary.main },
          style: {
            backgroundColor: themePalette.palette.secondary.main,
            "&:hover": {
              backgroundColor: themePalette.palette.secondary.main,
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
            "&:focus": {
              backgroundColor: themePalette.palette.secondary.main,
            },
            "&:disabled": {
              backgroundColor: "#1F1F1F1F",
            },
            "&:active": {
              backgroundColor: themePalette.palette.secondary.main,
              boxShadow: "unset",
            },
          },
        },
        {
          props: { variant: "outlined", color: themePalette.palette.text.primarywhite },
          style: {
            borderColor: themePalette.palette.primary.main,
            "&:hover": {
              backgroundColor: themePalette.palette.primary.main,
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
            "&:focus": {
              backgroundColor: themePalette.palette.primary.main,
            },
            "&:disabled": {
              backgroundColor: "#1F1F1F1F",
            },
            "&:active": {
              backgroundColor: themePalette.palette.primary.main,
              boxShadow: "unset",
            },
          },
        },
        {
          props: { variant: "outlinedsecondary", color: themePalette.palette.secondary.main },
          style: {
            borderColor: themePalette.palette.secondary.main,
            "&:hover": {
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
            "&:focus": {
              backgroundColor: themePalette.palette.secondary.main,
            },
            "&:disabled": {
              backgroundColor: "#1F1F1F1F",
            },
            "&:active": {
              backgroundColor: themePalette.palette.secondary.main,
              boxShadow: "unset",
            },
          },
        },
      ]
    }
  }
})