import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2563eb",
    },

    secondary: {
      main: "#7c3aed",
    },

    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 900,
    },

    h2: {
      fontWeight: 800,
    },

    h3: {
      fontWeight: 800,
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 8px 30px rgba(0,0,0,0.08)",
        },
      },
    },
  },
});

export default theme;
