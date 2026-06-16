export const contactStyles = {
  section: {
    pt: {
      xs: 1,
      md: 3,
    },
    pb: {
      xs: 1,
      md: 3,
    },
    scrollMarginTop: "80px",
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    mb: 2,
  },

  subtitle: {
    textAlign: "center",
    color: "text.secondary",
    maxWidth: "700px",
    mx: "auto",
    mb: 4,
  },

  card: {
    p: 4,
    borderRadius: 4,
    textAlign: "center",
    height: "100%",
  },

  icon: {
    fontSize: 42,
    color: "primary.main",
    mb: 2,
  },

  value: {
    color: "text.secondary",
  },

  gridContainer: {
    flexWrap: { xs: "wrap", md: "nowrap" },
    columnGap: { xs: 1, md: 2 },
    rowGap: { xs: 1.5, md: 2 },
    justifyContent: "center",
    textAlign: "center",
  },

  gridItem: {
    width: { xs: "100%", md: "auto" },
    display: "flex",
    justifyContent: "center",
  },
};