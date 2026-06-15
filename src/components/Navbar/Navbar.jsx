import { useState } from "react";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  EmailOutlined,
  GitHub,
  LinkedIn,
  Menu as MenuIcon,
} from "@mui/icons-material";

import { profile } from "../../data/portfolioData";
import { navbarStyles } from "./navbarStyles";

const navItems = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Experience",
    id: "experience",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Projects",
    id: "projects",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={navbarStyles.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={navbarStyles.toolbar}>
            <Avatar sx={navbarStyles.avatar}>{profile.initials}</Avatar>

            <Box sx={{ ml: 2 }}>
              <Typography sx={navbarStyles.brandName}>
                {profile.fullName}
              </Typography>

              <Typography variant="body2" sx={navbarStyles.brandRole}>
                {profile.role}
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" sx={navbarStyles.desktopNav}>
              {navItems.map((item) => (
                <Typography
                  key={item.id}
                  component="a"
                  href={`#${item.id}`}
                  sx={navbarStyles.navLink}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} sx={navbarStyles.desktopIcons}>
              <Tooltip title="GitHub">
                <IconButton href={profile.github} target="_blank">
                  <GitHub />
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn">
                <IconButton href={profile.linkedin} target="_blank">
                  <LinkedIn />
                </IconButton>
              </Tooltip>

              <Tooltip title="Email">
                <IconButton href={`mailto:${profile.email}`}>
                  <EmailOutlined />
                </IconButton>
              </Tooltip>
            </Stack>

            <IconButton
              onClick={() => setOpen(true)}
              sx={navbarStyles.mobileMenuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={navbarStyles.drawer}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.id}
                component="a"
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
