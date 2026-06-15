export const globalStyles = {
  section: {
    py: {
      xs: 8,
      sm: 10,
      md: 12,
    },
  },

  container: {
    maxWidth: "1200px",
    mx: "auto",
  },

  sectionTitle: {
    fontWeight: 800,
    textAlign: "center",
    mb: 2,
  },

  sectionSubtitle: {
    color: "text.secondary",
    textAlign: "center",
    maxWidth: "700px",
    mx: "auto",
    mb: 6,
  },

  card: {
    height: "100%",
    borderRadius: 4,
    transition: "all .3s ease",

    "&:hover": {
      transform: "translateY(-8px)",
    },
  },

  glassCard: {
    borderRadius: 4,
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.04)",
  },
};