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

import {
  GitHub,
  Launch,
} from "@mui/icons-material";

import { projectsStyles } from "./projectsStyles";

const projects = [
  {
    title: "User Management Platform",
    description:
      "Enterprise user management system with OAuth2, JWT authentication, role-based access and reporting.",
    image: "/images/project1.jpg",
    tech: [
      "Spring Boot",
      "ReactJS",
      "PostgreSQL",
      "JWT",
    ],
  },
  {
    title: "Bulk Excel Processing Engine",
    description:
      "High-performance processing system capable of handling millions of Excel records using asynchronous processing.",
    image: "/images/project2.jpg",
    tech: [
      "Java",
      "Spring Boot",
      "Apache POI",
      "PostgreSQL",
    ],
  },
  {
    title: "Customer Portal",
    description:
      "Modern customer-facing application providing self-service features and API integrations.",
    image: "/images/project3.jpg",
    tech: [
      "ReactJS",
      "MUI",
      "Spring Boot",
      "Docker",
    ],
  },
];

function Projects() {
  return (
    <Box
      id="projects"
      sx={projectsStyles.section}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={projectsStyles.title}
        >
          Featured Projects
        </Typography>

        <Typography sx={projectsStyles.subtitle}>
          A selection of enterprise solutions and
          full-stack applications built throughout
          my professional career.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid
              key={project.title}
              size={{ xs: 12, md: 4 }}
            >
              <Card sx={projectsStyles.card}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={projectsStyles.image}
                />

                <CardContent
                  sx={projectsStyles.content}
                >
                  <Typography
                    variant="h6"
                    sx={projectsStyles.projectTitle}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={projectsStyles.description}
                  >
                    {project.description}
                  </Typography>

                  <Box
                    sx={projectsStyles.chipContainer}
                  >
                    {project.tech.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                      />
                    ))}
                  </Box>

                  <Box
                    sx={projectsStyles.actionContainer}
                  >
                    <Button
                      startIcon={<GitHub />}
                      variant="outlined"
                    >
                      Code
                    </Button>

                    <Button
                      startIcon={<Launch />}
                      variant="contained"
                    >
                      Demo
                    </Button>
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