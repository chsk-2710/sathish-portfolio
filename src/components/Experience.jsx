import { Box, Card, CardContent, Chip, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <Box className="soft-band">
      <Container maxWidth="lg" className="section">
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography color="primary" fontWeight={800} sx={{ mb: 1 }}>
            Experience
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 42 }, maxWidth: 820 }}>
            Professional background
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Focused on enterprise healthcare software where reliability, auditability, and secure data access
            matter every day.
          </Typography>
        </Box>
        <Timeline position="right" sx={{ p: 0, m: 0 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card variant="outlined">
                <CardContent>
                  <Stack direction={{ xs: "column", md: "row" }} spacing={1} justifyContent="space-between">
                    <Box>
                      <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 30 } }}>
                        {experience.company} - {experience.title}
                      </Typography>
                      <Typography color="text.secondary">{experience.stack}</Typography>
                    </Box>
                    <Chip label={experience.period} color="primary" variant="outlined" />
                  </Stack>
                  <Divider sx={{ my: 2.5 }} />
                  <Grid container spacing={1.5}>
                    {experience.points.map((item) => (
                      <Grid item xs={12} sm={6} key={item}>
                        <Chip label={item} className="wide-chip" />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
}

export default Experience;
