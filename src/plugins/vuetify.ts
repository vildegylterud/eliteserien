// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Vuetify
import { createVuetify } from "vuetify";

const dark = {
  dark: true,
  colors: {
    background: "#100018",
    surface: "#100018",
    primary: "#6f03ff",
    grey: "#bfc2c7",
    "primary-c": "#FFFFFF",
    secondary: "#ffffff",
    "secondary-dimmed": "#ededed",
    error: "#e30e2a",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    gold: "#FFD700",
    silver: "#C0C0C0",
    bronze: "#665D1E",
  },
};
const light = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: "#ffffff",
    primary: "#00263E",
    "primary-c": "#ffffff",
    secondary: "#100018",
    grey: "#bfc2c7",
    "secondary-dimmed": "#ededed",
    error: "#e30e2a",
    info: "#e0ece0",
    success: "#4CAF50",
    warning: "#FB8C00",
    gold: "#FFD700",
    silver: "#C0C0C0",
    bronze: "#665D1E",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      dark,
      light,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
