import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { SecurityOutlined } from "@mui/icons-material";
import { highlights, interviewPoints } from "../data/portfolioData";

function About() {
  return (
    <>
      <Box className="stats-band">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {highlights.map((item) => (
              <Grid item xs={12} md={4} key={item.label}>
                <Card variant="outlined" className="stat-card">
                  <CardContent>
                    <Typography variant="h3" color="primary" sx={{ fontSize: 34 }}>
                      {item.label}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" className="section">
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography color="primary" fontWeight={800} sx={{ mb: 1 }}>
            Interview Pitch
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 42 }, maxWidth: 820 }}>
            What I can confidently discuss in interviews
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            These points are shaped from real project work, so they are strong talking tracks for system
            design, backend security, and production support rounds.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {interviewPoints.map((point) => (
            <Grid item xs={12} md={6} key={point}>
              <Card variant="outlined" className="point-card">
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <SecurityOutlined color="primary" />
                    <Typography>{point}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default About;
