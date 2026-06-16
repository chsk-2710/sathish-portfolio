import {
  Box,
  Card,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

import { skillsStyles } from "./skillsStyles";

import { skillCategories, tools } from "../../data/portfolioData";

function Skills() {
  return (
    <Box id="skills" sx={skillsStyles.section}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={skillsStyles.title}>
          Technical Skills
        </Typography>

        <Typography sx={skillsStyles.subtitle}>
          Technologies and tools used to build scalable enterprise applications.
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category) => (
            <Grid key={category.title} size={{ xs: 12, md: 6 }}>
              <Card sx={skillsStyles.categoryCard}>
                <Typography variant="h5" sx={skillsStyles.categoryTitle}>
                  {category.title}
                </Typography>

                {category.skills.map((skill) => (
                  <Box key={skill.name} sx={skillsStyles.skillRow}>
                    <Box sx={skillsStyles.skillHeader}>
                      <Typography sx={skillsStyles.skillName}>
                        {skill.name}
                      </Typography>

                      <Typography>{skill.value}%</Typography>
                    </Box>

                    <LinearProgress
                      variant="determinate"
                      value={skill.value}
                      sx={skillsStyles.progress}
                    />
                  </Box>
                ))}
              </Card>
            </Grid>
          ))}

          <Grid size={{ xs: 12 }}>
            <Card sx={skillsStyles.categoryCard}>
              <Typography variant="h5" sx={skillsStyles.categoryTitle}>
                Tools & Platforms
              </Typography>

              <Box sx={skillsStyles.chipContainer}>
                {tools.map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
