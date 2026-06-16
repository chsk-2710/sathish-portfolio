import { Box, Chip, Container, Typography } from "@mui/material";

import { experienceStyles } from "./experienceStyles";

import { experiences } from "../../data/portfolioData";

function Experience() {
  return (
    <Box id="experience" sx={experienceStyles.section}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={experienceStyles.title}>
          Experience
        </Typography>

        <Typography sx={experienceStyles.subtitle}>
          Professional journey and key contributions.
        </Typography>

        {experiences.map((item) => (
          <Box
            key={`${item.company}-${item.role}`}
            sx={experienceStyles.timelineItem}
          >
            <Box sx={experienceStyles.timelineDot} />

            <Typography variant="h6" sx={experienceStyles.company}>
              {item.company}
            </Typography>

            <Typography variant="h5" sx={experienceStyles.role}>
              {item.role}
            </Typography>

            <Typography sx={experienceStyles.period}>{item.period}</Typography>

            <Typography sx={experienceStyles.description}>
              {item.description}
            </Typography>

            <Box sx={experienceStyles.chipContainer}>
              {item.skills.map((skill) => (
                <Chip key={skill} label={skill} size="small" />
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Experience;
