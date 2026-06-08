import { Box, Button, Chip, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { EmailOutlined, GitHub, LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import { profile } from "../data/portfolioData";

function Hero() {
  return (
    <Box className="hero-band">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip icon={<WorkOutlineOutlined />} label={profile.availability} color="primary" />
                <Chip icon={<LocationOnOutlined />} label={profile.location} variant="outlined" />
              </Stack>
              <Box>
                <Typography variant="h1" sx={{ fontSize: { xs: 42, sm: 56, md: 72 }, maxWidth: 860 }}>
                  {profile.headline}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mt: 2.5, fontSize: { xs: 18, md: 21 }, maxWidth: 720, lineHeight: 1.65 }}
                >
                  {profile.summary}
                </Typography>
              </Box>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button size="large" variant="contained" startIcon={<EmailOutlined />} href={`mailto:${profile.email}`}>
                  Contact for Interview
                </Button>
                <Button size="large" variant="outlined" startIcon={<GitHub />} href={profile.github} target="_blank">
                  View GitHub
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box className="hero-visual hero-visual-no-image" aria-label="Current role summary">
              <Box className="hero-panel">
                <Stack spacing={2}>
                  <Box>
                    <Typography className="hero-panel-eyebrow">Current Role</Typography>
                    <Typography variant="h5" fontWeight={850}>
                      {profile.currentRole}
                    </Typography>
                    <Typography className="hero-panel-copy">{profile.currentSummary}</Typography>
                  </Box>
                  <Divider className="hero-panel-divider" />
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {profile.roleHighlights.map((item) => (
                      <Chip key={item} label={item} size="small" className="hero-panel-chip" />
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
