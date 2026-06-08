import { Box, Container, Typography } from "@mui/material";
import { profile } from "../data/portfolioData";

function Footer() {
  return (
    <Box component="footer" className="footer-band">
      <Container maxWidth="lg">
        <Typography color="text.secondary" variant="body2">
          {profile.name} | Java Backend Developer | Spring Boot | Microservices
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
