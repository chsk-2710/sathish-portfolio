export const navbarStyles = {
  appBar: {
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderBottom: "1px solid",
    borderColor: "divider",
    color: "text.primary",
  },

  toolbar: {
    minHeight: "80px",
  },

  avatar: {
    bgcolor: "primary.main",
    fontWeight: 700,
  },

  brandName: {
    fontWeight: 800,
    lineHeight: 1.1,
  },

  brandRole: {
    color: "text.secondary",
  },

  desktopNav: {
    display: {
      xs: "none",
      md: "flex",
    },
    gap: 4,
  },

  navLink: {
    textDecoration: "none",
    color: "text.primary",
    fontWeight: 600,
    transition: "all .3s ease",

    "&:hover": {
      color: "primary.main",
    },
  },

  desktopIcons: {
    ml: 2,

    display: {
      xs: "none",
      md: "flex",
    },
  },

  mobileMenuButton: {
    display: {
      xs: "flex",
      md: "none",
    },
  },

  drawer: {
    width: 280,
    p: 2,
  },
};