import { extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "60px";
const FOOTER_HEIGHT = "240px";
const MAIN_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${FOOTER_HEIGHT})`;

const theme = extendTheme({
  heySonCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    mainHeight: MAIN_HEIGHT,
    footerHeight: FOOTER_HEIGHT,

    palette: {
      highlightColor: "#ce5e46",
    },
  },

  colorSchemes: {
    dark: true,
  },

  components: {},
});

export default theme;
