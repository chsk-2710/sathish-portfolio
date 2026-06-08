import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#176b5f",
      dark: "#0e443d",
    },
    secondary: {
      main: "#c75f3a",
    },
    background: {
      default: "#f7f8f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#17201d",
      secondary: "#5b6460",
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.04,
    },
    h2: {
      fontWeight: 760,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 720,
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 720,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 18px 50px rgba(25, 39, 35, 0.08)",
        },
      },
    },
  },
});

export default theme;
