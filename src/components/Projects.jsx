import { ArticleOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { certifications, education, project } from "../data/portfolioData";

function Projects() {
  return (
    <>
      <Container maxWidth="lg" className="section">
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography color="primary" fontWeight={800} sx={{ mb: 1 }}>
            Project
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 42 }, maxWidth: 820 }}>
            {project.title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            {project.description}
          </Typography>
        </Box>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" sx={{ fontSize: 24, mb: 2 }}>
              Tech Stack
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {project.techStack.map((item) => (
                <Chip key={item} label={item} size="small" />
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Container>

      <Box className="soft-band">
        <Container maxWidth="lg" className="section">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                <Typography color="primary" fontWeight={800} sx={{ mb: 1 }}>
                  Education
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 42 }, maxWidth: 820 }}>
                  {education.degree}
                </Typography>
              </Box>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" fontWeight={800}>
                    {education.college}
                  </Typography>
                  <Typography color="text.secondary">
                    {education.location} | {education.period}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                <Typography color="primary" fontWeight={800} sx={{ mb: 1 }}>
                  Certifications
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 42 }, maxWidth: 820 }}>
                  Continuous learning
                </Typography>
              </Box>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {certifications.map((item) => (
                  <Chip key={item} icon={<ArticleOutlined />} label={item} color="primary" variant="outlined" />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Projects;
