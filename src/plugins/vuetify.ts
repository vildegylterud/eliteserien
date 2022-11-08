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
    primary: "#07987d",
    "primary-c": "#FFFFFF",
    secondary: "#ffffff",
    "secondary-dimmed": "#b6b6b6",
    error: "#CF6679",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};
const light = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: "#ffffff",
    primary: "#07987d",
    "primary-c": "#ffffff",
    secondary: "#100018",
    "secondary-dimmed": "#545454",
    error: "#B00020",
    info: "#e0ece0",
    success: "#4CAF50",
    warning: "#FB8C00",
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
