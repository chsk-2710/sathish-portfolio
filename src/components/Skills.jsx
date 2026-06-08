import { Avatar, Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { Code, StorageOutlined, Terminal, VerifiedOutlined } from "@mui/icons-material";
import { skills } from "../data/portfolioData";

const skillIcons = {
  terminal: <Terminal />,
  code: <Code />,
  storage: <StorageOutlined />,
  verified: <VerifiedOutlined />,
};

function Skills() {
  return (
    <Container maxWidth="lg" className="section">
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Typography color="primary" fontWeight={800} sx={{ mb: 1 }}>
          Skills
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 42 }, maxWidth: 820 }}>
          A focused stack for backend product teams
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {skills.map((group) => (
          <Grid item xs={12} md={6} key={group.title}>
            <Card variant="outlined" className="skill-card">
              <CardContent>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar className="skill-icon">{skillIcons[group.icon]}</Avatar>
                  <Typography variant="h4" sx={{ fontSize: 24 }}>
                    {group.title}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {group.items.map((item) => (
                    <Chip key={item} label={item} variant="outlined" />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
