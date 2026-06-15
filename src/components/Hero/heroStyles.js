export const heroStyles = {
  section: {
    minHeight: "auto",
    display: "flex",
    alignItems: "center",
    pt: {
      xs: 2,
      md: 2,
    },
    pb: {
      xs: 4,
      md: 6,
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  chipContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 1,
    width: "100%",
    mt: 2,
  },

  headline: {
    fontWeight: 900,
    lineHeight: 1.1,

    fontSize: {
      xs: "1.5rem",
      sm: "2.2rem",
      md: "3rem",
    },
  },

  gradientText: {
    background:
      "linear-gradient(135deg,#1976d2,#7b1fa2)",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  summary: {
    color: "text.secondary",

    fontSize: {
      xs: "1rem",
      md: "1.2rem",
    },

    lineHeight: 1.8,
    maxWidth: "700px",
  },

  actionContainer: {
    display: "flex",
    gap: 2,

    flexDirection: {
      xs: "column",
      sm: "row",
    },
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  imageWrapper: {
    position: "relative",
  },

  imageGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    filter: "blur(50px)",
    opacity: 0.25,
    bgcolor: "primary.main",
    transform: "scale(1.1)",
  },

  avatar: {
    width: {
      xs: 120,
      sm: 220,
      md: 280,
    },

    height: {
      xs: 120,
      sm: 220,
      md: 280,
    },

    border: "2px solid",
    borderColor: "primary.main",
    position: "relative",
  },

  statsContainer: {
    display: "flex",
    gap: 2,
    flexWrap: "wrap",
    mt: 2,
  },

  statItem: {
    minWidth: "120px",
  },

  statValue: {
    fontWeight: 800,
  },

  statLabel: {
    color: "text.secondary",
  },
};
