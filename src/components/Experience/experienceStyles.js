export const experienceStyles = {
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
    mb: 1,
  },

  subtitle: {
    textAlign: "center",
    color: "text.secondary",
    maxWidth: "700px",
    mx: "auto",
    mb: 4,
  },

  timelineItem: {
    borderLeft: "4px solid",
    borderColor: "primary.main",
    pl: 4,
    pb: 3,
    position: "relative",
  },

  timelineDot: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    bgcolor: "primary.main",
    position: "absolute",
    left: "-11px",
    top: 8,
  },

  company: {
    fontWeight: 700,
  },

  role: {
    fontWeight: 800,
    mb: 1,
  },

  period: {
    color: "text.secondary",
    mb: 2,
  },

  description: {
    color: "text.secondary",
    lineHeight: 1.8,
  },

  chipContainer: {
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
    mt: 2,
  },
};