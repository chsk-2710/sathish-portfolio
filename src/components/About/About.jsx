import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { aboutStyles } from "./aboutStyles";

function About() {
  return (
    <Box
      id="about"
      sx={aboutStyles.section}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={aboutStyles.title}
        >
          About Me
        </Typography>

        <Typography sx={aboutStyles.subtitle}>
          Passionate Full Stack Developer
          specializing in scalable enterprise
          applications.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={aboutStyles.card}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={aboutStyles.cardTitle}
                >
                  Professional Summary
                </Typography>

                <Typography
                  sx={aboutStyles.content}
                >
                  Full Stack Developer with{" "}
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    5+ years
                  </span>{" "}
                  of experience in Java,
                  Spring Boot, ReactJS,
                  PostgreSQL, Microservices
                  and Cloud solutions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={aboutStyles.card}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={aboutStyles.cardTitle}
                >
                  What I Do
                </Typography>

                <Typography
                  sx={aboutStyles.content}
                >
                  Design and develop secure,
                  scalable and high-performance
                  applications with modern
                  technologies and clean
                  architecture.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;