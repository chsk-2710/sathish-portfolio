import { AppBar, Avatar, Box, Container, IconButton, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import { EmailOutlined, GitHub } from "@mui/icons-material";
import { profile } from "../data/portfolioData";

function Navbar() {
  return (
    <AppBar
      elevation={0}
      position="sticky"
      color="transparent"
      sx={{ backdropFilter: "blur(18px)", borderBottom: "1px solid rgba(23, 32, 29, 0.08)" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main", color: "white", fontWeight: 800 }}>{profile.initials}</Avatar>
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography fontWeight={850} color="text.primary" noWrap>
              {profile.name}
            </Typography>
            <Typography color="text.secondary" variant="body2" noWrap>
              {profile.role}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Tooltip title="GitHub">
              <IconButton component="a" href={profile.github} target="_blank">
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email">
              <IconButton component="a" href={`mailto:${profile.email}`}>
                <EmailOutlined />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
