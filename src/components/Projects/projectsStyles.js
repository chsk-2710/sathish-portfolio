export const projectsStyles = {
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
    height: "100%",
    borderRadius: 4,
    overflow: "hidden",
    transition: "all .3s ease",

    "&:hover": {
      transform: "translateY(-8px)",
    },
  },

  image: {
    height: 220,
    objectFit: "cover",
  },

  content: {
    p: 3,
  },

  projectTitle: {
    fontWeight: 700,
    mb: 1,
  },

  description: {
    color: "text.secondary",
    mb: 3,
    lineHeight: 1.7,
  },

  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    mb: 3,
  },

  actionContainer: {
    display: "flex",
    gap: 2,
  },
};