import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import {
  EmailOutlined,
  DownloadOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";

import { profile } from "../../data/portfolioData";
import { heroStyles } from "./heroStyles";
import profileImage from "../../assets/profile.jpg";

function Hero() {
  return (
    <Box sx={heroStyles.section}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={heroStyles.content}>
              <Typography sx={heroStyles.headline}>
                Hi, I'm{" "}
                <Box component="span" sx={heroStyles.gradientText}>
                  {profile.name}
                </Box>
              </Typography>

              <Typography variant="h5" color="text.secondary">
                {profile.role}
              </Typography>

              <Typography sx={heroStyles.summary}>{profile.summary}</Typography>

              <Box sx={heroStyles.actionContainer}>
                <Button
                  variant="contained"
                  size="medium"
                  startIcon={<EmailOutlined />}
                  onClick={() =>
                    (window.location.href = `mailto:${profile.email}`)
                  }
                >
                  Contact Me
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  startIcon={<DownloadOutlined />}
                  onClick={() => window.open(profile.resume, "_blank")}
                >
                  Download Resume
                </Button>
              </Box>

              <Box sx={heroStyles.statsContainer}>
                <Box sx={heroStyles.statItem}>
                  <Typography variant="h4" sx={heroStyles.statValue}>
                    {profile.yearsOfExperience}
                  </Typography>
                  <Typography sx={heroStyles.statLabel}>Years Exp</Typography>
                </Box>

                <Box sx={heroStyles.statItem}>
                  <Typography variant="h4" sx={heroStyles.statValue}>
                    {profile.numberOfProjects}
                  </Typography>
                  <Typography sx={heroStyles.statLabel}>Projects</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={heroStyles.imageContainer}>
              <Box sx={heroStyles.imageWrapper}>
                <Box sx={heroStyles.imageGlow} />
                <Avatar
                  src={profileImage}
                  alt={profile.name}
                  sx={heroStyles.avatar}
                />
              </Box>
            </Box>
            <Box sx={heroStyles.chipContainer}>
              <Chip
                icon={<WorkOutlineOutlined />}
                color="primary"
                label={
                  <>
                    {profile.currentCompanyRole} @{" "}
                    <Link
                      href={profile.currentCompanyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="inherit"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {profile.currentCompany}
                    </Link>
                  </>
                }
              />
              <Chip
                icon={<LocationOnOutlined />}
                label={profile.location}
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
