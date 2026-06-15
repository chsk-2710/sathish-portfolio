import {
  Box,
  Chip,
  Container,
  Typography,
} from "@mui/material";

import { experienceStyles } from "./experienceStyles";

const experiences = [
  {
    company: "Current Organization",
    role: "Senior Full Stack Developer",
    period: "2023 - Present",
    description:
      "Developing enterprise-grade applications using Java, Spring Boot, ReactJS, PostgreSQL, OAuth2 and Microservices architecture.",
    skills: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    company: "Previous Organization",
    role: "Software Engineer",
    period: "2021 - 2023",
    description:
      "Worked on large-scale backend systems, REST APIs, authentication and database optimization projects.",
    skills: [
      "Java",
      "MS SQL",
      "Microservices",
      "JWT",
    ],
  },
  {
    company: "Early Career",
    role: "Associate Software Engineer",
    period: "2020 - 2021",
    description:
      "Built business applications and gained strong experience in Java development and database management.",
    skills: [
      "Java",
      "SQL",
      "Spring",
    ],
  },
];

function Experience() {
  return (
    <Box
      id="experience"
      sx={experienceStyles.section}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={experienceStyles.title}
        >
          Experience
        </Typography>

        <Typography
          sx={experienceStyles.subtitle}
        >
          Professional journey and key
          contributions.
        </Typography>

        {experiences.map((item) => (
          <Box
            key={`${item.company}-${item.role}`}
            sx={experienceStyles.timelineItem}
          >
            <Box
              sx={experienceStyles.timelineDot}
            />

            <Typography
              variant="h6"
              sx={experienceStyles.company}
            >
              {item.company}
            </Typography>

            <Typography
              variant="h5"
              sx={experienceStyles.role}
            >
              {item.role}
            </Typography>

            <Typography
              sx={experienceStyles.period}
            >
              {item.period}
            </Typography>

            <Typography
              sx={experienceStyles.description}
            >
              {item.description}
            </Typography>

            <Box
              sx={experienceStyles.chipContainer}
            >
              {item.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                />
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Experience;