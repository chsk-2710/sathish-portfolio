import { Box, Button, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { EmailOutlined, GitHub, LinkedIn, PhoneOutlined } from "@mui/icons-material";
import { profile } from "../data/portfolioData";

const contactLinks = [
  {
    icon: <EmailOutlined />,
    label: "Email",
    href: `mailto:${profile.email}`,
    text: profile.email,
  },
  {
    icon: <PhoneOutlined />,
    label: "Phone",
    href: profile.phoneHref,
    text: profile.phone,
  },
  {
    icon: <GitHub />,
    label: "GitHub",
    href: profile.github,
    text: profile.githubText,
  },
];

function Contact() {
  return (
    <Container maxWidth="lg" className="section contact-section">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography color="primary" fontWeight={800} sx={{ mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 48 } }}>
            Ready for Java backend, Spring Boot, and microservices interviews.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack spacing={1.5}>
            {contactLinks.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                variant="outlined"
                size="large"
                startIcon={link.icon}
                sx={{ justifyContent: "flex-start" }}
              >
                <Box component="span" sx={{ textAlign: "left", minWidth: 0 }}>
                  <Typography component="span" display="block" fontWeight={800}>
                    {link.label}
                  </Typography>
                  <Typography component="span" display="block" variant="body2" color="text.secondary">
                    {link.text}
                  </Typography>
                </Box>
              </Button>
            ))}
            <Link
              href={profile.linkedIn}
              target="_blank"
              underline="hover"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "text.secondary", mt: 1 }}
            >
              <LinkedIn fontSize="small" />
              Add your LinkedIn URL here when ready
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
