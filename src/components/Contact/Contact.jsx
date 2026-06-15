import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import {
  EmailOutlined,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

import { contactStyles } from "./contactStyles";

function Contact() {
  return (
    <Box
      id="contact"
      sx={contactStyles.section}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={contactStyles.title}
        >
          Contact Me
        </Typography>

        <Typography sx={contactStyles.subtitle}>
          Interested in working together or
          discussing new opportunities?
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={contactStyles.card}>
              <EmailOutlined
                sx={contactStyles.icon}
              />

              <Typography variant="h6">
                Email
              </Typography>

              <Typography
                sx={contactStyles.value}
              >
                yourmail@gmail.com
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={contactStyles.card}>
              <LinkedIn sx={contactStyles.icon} />

              <Typography variant="h6">
                LinkedIn
              </Typography>

              <Typography
                sx={contactStyles.value}
              >
                linkedin.com/in/sathish
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={contactStyles.card}>
              <GitHub sx={contactStyles.icon} />

              <Typography variant="h6">
                GitHub
              </Typography>

              <Typography
                sx={contactStyles.value}
              >
                github.com/sathish
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;