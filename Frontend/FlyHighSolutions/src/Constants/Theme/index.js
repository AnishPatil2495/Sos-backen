import { createTheme } from "@mui/material/styles";
import { themePalette } from "./colors"
import { themeLayout } from "./layout"
import { themeShape } from "./shape"
import { themeTypography } from "./typography"
import { themeButtons } from "./buttons";

const theme = createTheme(
  themePalette,
  themeLayout,
  themeShape,
  themeTypography,
  themeButtons,
);

export default theme;