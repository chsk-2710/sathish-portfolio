import { Box, Button, Container, Grid, Typography } from "@mui/material";

import {
  EmailOutlined,
  GitHub,
  LinkedIn,
  PhoneAndroid,
} from "@mui/icons-material";

import { contactStyles } from "./contactStyles";
import { profile } from "../../data/portfolioData";

function Contact() {
  return (
    <Box id="contact" sx={contactStyles.section}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={contactStyles.title}>
          Contact Me
        </Typography>

        <Typography sx={contactStyles.subtitle}>
          Interested in working together or discussing new opportunities?
        </Typography>

        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={contactStyles.gridContainer}
        >
          <Grid item xs={12} md={4} sx={contactStyles.gridItem}>
            <Button
              variant="outlined"
              size="medium"
              component={profile.email ? "a" : "button"}
              href={profile.email ? `mailto:${profile.email}` : undefined}
              startIcon={<EmailOutlined />}
            >
              {profile.email || "Email"}
            </Button>
          </Grid>

          <Grid item xs={12} md={4} sx={contactStyles.gridItem}>
            <Button
              variant="outlined"
              size="medium"
              component={profile.phone ? "a" : "button"}
              href={profile.phone ? `tel:${profile.phone}` : undefined}
              startIcon={<PhoneAndroid />}
            >
              {profile.phone || "Phone"}
            </Button>
          </Grid>

          <Grid item xs={12} md={4} sx={contactStyles.gridItem}>
            <Button
              variant="outlined"
              size="medium"
              component="a"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LinkedIn />}
            >
              LinkedIn
            </Button>
          </Grid>

          <Grid item xs={12} md={4} sx={contactStyles.gridItem}>
            <Button
              variant="outlined"
              size="medium"
              component="a"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHub />}
            >
              GitHub
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
