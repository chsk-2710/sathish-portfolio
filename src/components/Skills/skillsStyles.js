export const skillsStyles = {
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

  categoryCard: {
    height: "100%",
    borderRadius: 4,
    p: 3,

    transition: "all .3s ease",

    "&:hover": {
      transform: "translateY(-6px)",
    },
  },

  categoryTitle: {
    fontWeight: 700,
    mb: 3,
  },

  skillRow: {
    mb: 3,
  },

  skillHeader: {
    display: "flex",
    justifyContent: "space-between",
    mb: 1,
  },

  skillName: {
    fontWeight: 600,
  },

  progress: {
    height: 10,
    borderRadius: 20,
  },

  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
  },
};