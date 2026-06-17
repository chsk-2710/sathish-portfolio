import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { GitHub, Launch } from "@mui/icons-material";

import { projectsStyles } from "./projectsStyles";

import { projects } from "../../data/portfolioData";

function Projects() {
  return (
    <Box id="projects" sx={projectsStyles.section}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={projectsStyles.title}>
          Featured Projects
        </Typography>

        <Typography sx={projectsStyles.subtitle}>
          A selection of enterprise solutions and full-stack applications built
          throughout my professional career.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.title} size={{ xs: 12, md: 4 }}>
              <Card sx={projectsStyles.card}>
                {/* <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={projectsStyles.image}
                /> */}
                <CardContent sx={projectsStyles.content}>
                  <Typography variant="h6" sx={projectsStyles.projectTitle}>
                    {project.title}
                  </Typography>

                  <Typography sx={projectsStyles.description}>
                    {project.description}
                  </Typography>

                  <Box sx={projectsStyles.chipContainer}>
                    {project.tech.map((item) => (
                      <Chip key={item} label={item} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
